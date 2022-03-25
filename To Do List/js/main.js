// Islzing Variables
const taskInput = document.getElementById("add-task-input");
const addBtn = document.getElementById("add-btn");

const addingElements = (value) => {
  let error = true;
  let errorMessage = "Please put a value grater 0";
  const ul = document.getElementById("append-lists");
  const listText = document.getElementsByClassName("lists-task-text");
  if (value.length >= 1) {
    const li = `
                    <li>
                        <input type="checkbox" name="list" class="lists" />
                        <p class="lists-task-text">${value}</p>
                    </li>
                `;
    ul.innerHTML += li;
  } else {
    alert("Please put a value grater 0");
  }
};

// Calling Function
addBtn.addEventListener("click", () => {
  addingElements(taskInput.value);
});

// Problem
// Delete Button
// Delete All Button
// Add the task in local storage
// When the check box is clicked it should turn the list to -----
