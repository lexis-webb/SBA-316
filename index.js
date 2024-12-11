const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

function createListElement() {
  if (input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";

    // Add strikethrough on click
    li.addEventListener("click", () => li.classList.toggle("done"));

    // Add delete button
    const dBtn = document.createElement("button");
    dBtn.textContent = "X";
    li.appendChild(dBtn);
    dBtn.addEventListener("click", () => li.remove());
  }
}

enterButton.addEventListener("click", createListElement);
input.addEventListener("keypress", (event) => {
  if (event.which === 13) createListElement(); // 13 is the Enter key
});

