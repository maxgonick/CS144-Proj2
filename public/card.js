/* The text to use when description is empty */
const NO_DESCRIPTION_TEXT = "(No description)";
const deleteEvent = (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("WORK");
  const cardNode = event.target.closest(".card");
  cardNode.remove();
};
export default class Card {
  constructor(title, color) {
    //TODO
    self.title = title;
    self.color = color;
  }

  addToCol(colElem, mover) {
    //TODO
    console.log("in add to card");
    const newElement = document.querySelector(".template").cloneNode(true);
    newElement.classList.remove("template");
    newElement.style.backgroundColor = self.color;
    const title = newElement.querySelector(".title");
    title.textContent = self.title;
    newElement.querySelector(".delete").addEventListener("click", deleteEvent);
    colElem.append(newElement);
  }

  setDescription(text) {
    //TODO
  }

  //TODO
}
