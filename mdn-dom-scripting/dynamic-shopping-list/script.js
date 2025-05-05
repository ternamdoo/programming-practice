const list = document.querySelector("ul");
const input = document.querySelector("#item");
const addItem = document.querySelector("button");

function modifyList() {
    // Cceate nodes for our list
    const item = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteButton = document.createElement("button");

    // add an item to the list
    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);
    listText.textContent = `${item[0].toUpperCase() + item.slice(1)}`;
    deleteButton.textContent = "Delete";
    list.appendChild(listItem);

    // delete any item on the list
    deleteButton.addEventListener("click", () => deleteButton.parentNode.remove());

    input.focus();
}

addItem.addEventListener("click", modifyList);