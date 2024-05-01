/* The text to use when description is empty */
const NO_DESCRIPTION_TEXT = "(No description)";
export default class Card {
  constructor(title, color) {
    //TODO
    self.title = title;
    self.color = color;
    self.card = null;
  }

  addToCol(colElem, mover) {
    //TODO
    //Helper Functions
    const deleteEvent = (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("WORK");
      mover.stopMoving();
      const cardNode = event.target.closest(".card");
      cardNode.remove();
    };
    const leaveEditEvent = (event) => {
      event.stopPropagation();
      event.preventDefault();
      const cardNode = event.target.closest(".card");
      const editField = cardNode.querySelector(".editDescription");
      console.log(editField.value);
      cardNode.querySelector(".description").innerHTML = editField.value;
      editField.classList.add("hidden");
    };
    const editEvent = (event) => {
      event.stopPropagation();
      event.preventDefault();
      const cardNode = event.target.closest(".card");
      const editField = cardNode.querySelector(".editDescription");
      editField.classList.remove("hidden");
      editField.value = cardNode.querySelector(".description").innerText;
      editField.focus();
      editField.select();
    };
    const moveEvent = (event) => {
      event.stopPropagation();
      event.preventDefault();
      mover.stopMoving();
      console.log(event.target.closest(".card"));
      mover.startMoving(event.target.closest(".card"));
    };
    const newElement = document.querySelector(".template").cloneNode(true);
    newElement.classList.remove("template");
    newElement.style.backgroundColor = self.color;
    const title = newElement.querySelector(".title");
    title.innerText = self.title;
    newElement.querySelector(".delete").addEventListener("click", deleteEvent);
    newElement.querySelector(".edit").addEventListener("click", editEvent);
    newElement.querySelector(".editDescription").addEventListener("blur", leaveEditEvent);
    newElement.querySelector(".startMove").addEventListener("click", moveEvent);
    newElement.querySelector(".description").innerText = NO_DESCRIPTION_TEXT;
    self.card = newElement;
    colElem.append(newElement);
  }
  setDescription(text) {
    //TODO
    self.card.querySelector(".description").innerText = text;
  }

  //TODO
}
