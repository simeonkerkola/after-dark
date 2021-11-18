import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

const BIG_CONSTANT = "const";

interface WhatEver {
  count: number;
  type: string;
  func: () => void;
  magic?: string;
}
type SomeType = {
  prop: Boolean;
  another: string;
};

const a = {
  very: {
    deep: {
      object: {
        or: {
          is: {
            it: "?",
            stil: {
              or: {
                yes: "sd",
              },
            },
          },
        },
      },
    },
  },
};

let funcc = (someThings: WhatEver) => {
  console.log(someThings.type);
  console.log(someThings.typee);
  console.log(someThings.func((((((((((((())))))))))))));
};

funcc({ type: "adsf", count: 2 });

// functions
let func3 = (someThings: WhatEver): void => {
  console.log(someThings, BIG_CONSTANT);
};

// Class
class Animal {
  sing: string;
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}
