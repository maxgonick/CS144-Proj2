import Card from "./card.js";
import Mover from "./mover.js";

export default class App {
  constructor() {
    //TODO
    this.todo = [];
    this.doing = [];
    this.done = [];
  };

  addCard(col, title, color) {
    //TODO
    console.log("in addCard");
    const card = new Card(title, color);
    card.addToCol(document.querySelector("#" + col), null);
    return card;

  //TODO
  };
};
