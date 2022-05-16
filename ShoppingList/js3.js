/*Exercise: DOM Events
Using the Shopping List files from the previous videos update the shopping list app to do the following:
1. If you click on the list item, it toggles the .done  class on and off.
2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)*/

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
const list = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function addDelete(e) {
    let btn = document.createElement("button"); //asigna variable a btn
    btn.appendChild(document.createTextNode("Delete"));
    btn.addEventListener("click", function () {//asigna evento y funcion eliminar
    btn.parentElement.remove(); 
    });
    
    e.appendChild(btn); //boton con evento y node.
  }

  function addToggle(e) {
    let btn2 = document.createElement("button"); //asigna variable a btn
    btn2.appendChild(document.createTextNode("Done"));
    btn2.addEventListener("click", function () {//asigna evento y funcion eliminar
    e.classList.toggle("done");
    });
    
    e.appendChild(btn2); //boton con evento y node.
  }


// function toggleAfterClick(e) { //crea funcion
//     e.addEventListener("click", function () { //asigna evento y funcion
//       e.classList.toggle("done");
//     });
//   }


function createListElement() {
let li = document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value = "";
  
addDelete(li);
addToggle(li);
}


function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
list.forEach(addDelete);
list.forEach(addToggle);

