//Define UI Variables
const grocerieList = document.getElementById("main-list");
const addItemInput = document.getElementById("add-item-input");
const addItemBtn = document.getElementById("add-item-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const check = document.getElementById("check");
const trash = document.getElementById("trash");

//Load All Event Listeners Call
loadEventListeners();

//Load All Event Listeners Function
function loadEventListeners() {
  addItemBtn.addEventListener("click", addItem);
}

//Add Item
function addItem() {
  if (addItemInput.value === "") {
    alert("Please add an Item");

    grocerieList.removeChild(li);
  }

  //Add Text From input box to an li and add it to the main ul (main-list)
  const li = document.createElement("li");
  //Add Classes to Li Element
  li.className = "li-styling";
  //Create Text Node and append to li
  li.appendChild(document.createTextNode(addItemInput.value));
  //Create i element for FA Icons
  const icon = document.createElement("i");
  //Add Icon HTML
  icon.innerHTML = "<i class ='fa-solid fa-square-check fa-2x'</i>";

  //Append icon to li
  li.appendChild(icon);

  //Create i element for FA Icons
  const icon2 = document.createElement("i");
  //Add Icon HTML
  icon2.innerHTML = "<i class ='fa-solid fa-trash-can fa-2x delete-item'</i>";

  //Append icon to li
  li.appendChild(icon2);

  //Append li to ul
  grocerieList.appendChild(li);

  //Clear Input
  addItemInput.value = "";
}
