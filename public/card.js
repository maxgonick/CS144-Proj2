/* The text to use when description is empty */
const NO_DESCRIPTION_TEXT = "(No description)";

export default class Card {
  constructor(title, color) {
    //TODO
    self.title = title;
    self.color = color;

    self.htmlCode = `<article class="card">
    <h3 class="title">${title}</h3>
    <p class="description">${NO_DESCRIPTION_TEXT}</p>
    <textarea class="editDescription hidden"></textarea>
    <div class="buttons">
      <button class="edit"><img src="icons/edit.svg" alt="Edit"></button>
      <button class="startMove"><img src="icons/move.svg" alt="Move"></button>
      <button class="delete"><img src="icons/delete.svg" alt="Delete"></button>
    </div>
    </article>`;
  }

  addToCol(colElem, mover) {
    //TODO
    console.log("in add to card");
    // eslint-disable-next-line no-restricted-properties
    const newElement = document.createElement("div");
    newElement.innerHTML = self.htmlCode;
    newElement.style.backgroundColor = self.color;
    colElem.append(newElement);
  }

  setDescription(text) {
    //TODO
  }

  //TODO
}
