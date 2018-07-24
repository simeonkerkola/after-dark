(ns example
  (:require [reagent.core :as r]))

(defn home-page []
  [:div
    [board state]
    [:div [:a {:href "/about"} "go to about page"]]])

(defn about-page []
    [:div [:h2 "About reagent-fiddle"]
      [:div [:a {:href "/"} "go to the home page"]]])

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
