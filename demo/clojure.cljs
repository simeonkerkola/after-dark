(ns example
  (:require [reagent.core :as r]))

(defn new-card [col-cur]
  [:div.new-card
   {:on-click #(add-new-card col-cur)}
   "+ a new card"])

(defn column [col-cur]
  (let [{:keys [title cards]} @col-cur]
    [:div.column
     ^{:key title} [editable :h2 col-cur]

    ; Get each individual card
     (map-indexed (fn [idx {id :id}]
                    ; Creating a cursor based on another cursor
                    (let [card-cur (r/cursor col-cur [:cards idx])]
                      ^{:key id} [card card-cur]))
                  cards)
     [new-card col-cur]]))

(defn- add-new-column [board]
  (swap! state update :columns conj {:id (random-uuid)
                                     :title ""
                                     :cards []
                                     :editing true}))

;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div [@page]])

(secretary/defroute "/" []
  (reset! page #'home-page))

(secretary/defroute "/about" []
  (reset! page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path)
      :path-exists?)
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
