const input = document.getElementById("input");
const list = document.getElementById("list");

function addtolist() {
  if (input.value == "") {
    alert("Fild is Empty");
  } else {
    let item = document.createElement("div");
    item.classList.add("item");
    let li = document.createElement("p");
    li.innerHTML = `&#9711 &nbsp ${input.value}`;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    item.appendChild(li);
    item.appendChild(span);
    list.appendChild(item);
  }
  input.value = "";
}

list.addEventListener("click", function (event) {
  if (event.target.tagName == "P") {
    event.target.classList.toggle("checked");
  }
  if (event.target.tagName == "SPAN") {
    event.target.parentElement.remove();
  }
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addtolist();
  }
});
