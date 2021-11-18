import { FormsModule } from "@angular/forms";

async function fuu() {
  await fetch();
}

fuu.then((res) => {
  console.log("bar");
});

const hello = "I am never used";

const obj = {
  hello: "hello",
};

let og = {};

obj.hello;

obj.byebye;

doesNotExist.nope(`I'm never imported`);

document.querySelectorAll(".lol");

mockument.notQuerySelectorAll(".lol");

// Comment

process.env.APP_SECRET;

arr.length;

undefined;
asd;

throw new Error("Danger!");

Array.constructor;

global.dogs = global.dogs || [];

module.exports = Query;

export default {};

var lol = !!false;
CONST === "moi";

CONST;

const obj = {
  this: "is",
  key: "value",
  lol: true,
};

this.me;

window.self.me;

const { dest } = ruckted;

for (const { url: resourceUrl } of resources) this.is.me;

class widget extends React.Component {}

const joe = function () {};

function unused(arg) {
  console.log("i never do anything");
}

const variable = 100;
let cool = true;

function func() {}

const variable = () => {};

console.log(joe, variable);

import perPage from "../utils";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($first: Int = ${perPage}, $skip: Int = 0, $string: String = "asd") {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;
