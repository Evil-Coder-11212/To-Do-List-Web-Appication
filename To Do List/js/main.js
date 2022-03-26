// Islzing Variables
const taskInput = document.getElementById("add-task-input");
const addBtn = document.getElementById("add-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const ul = document.getElementById("append-lists");
let task = [];

const deleteAll = () => {
  task = [];
  ul.innerHTML = "";
};

const addingElements = (value) => {
  let error = true;
  let errorMessage = "Please put a value grater 0";
  if (value.length >= 1) {
    const li = `
                        <li>
                            <input type="checkbox" name="list" class="lists" />
                            <p class="lists-task-text">${value}</p>
                        </li>
                    `;
    task.push(li);
    ul.innerHTML += li;
    console.log(task);
  } else {
    alert("Please put a value grater 0");
  }
};

// Calling Function
addBtn.addEventListener("click", () => {
  addingElements(taskInput.value);
});

deleteAllBtn.addEventListener("click", () => {
  deleteAll();
});

// Problem
// Delete Button
// Add the task in local storage
// When the check box is clicked it should turn the list to -----
