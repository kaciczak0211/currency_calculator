const input = document.getElementById("item-input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("test");
  const newDiv = document.createElement("div");
  newDiv.classList = "list-item";
  newDiv.textContent = input.value;
  console.log(input.value);
  list.appendChild(newDiv);

  input.value = "";

  newDiv.addEventListener("click", function () {
    newDiv.remove();
  });
});
