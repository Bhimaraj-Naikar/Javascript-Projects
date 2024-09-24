const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function() {
    if (inputTask.value === "") {
        alert("Please Enter a Task");
    } else {
        let task = document.createElement('div');
        task.classList.add('task');

        let li = document.createElement('li');
        li.innerText = `${inputTask.value}`;
        task.appendChild(li);

        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = '&#x2713;';
        checkBtn.classList.add('check-btn');
        task.appendChild(checkBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&#10007;';
        deleteBtn.classList.add('delete-btn');
        task.appendChild(deleteBtn);

        taskContainer.appendChild(task);

        // Clear the input field after adding a task
        inputTask.value = "";

        // Add functionality to the check button
        checkBtn.addEventListener('click', function() {
            li.style.textDecoration = 'line-through';
        });

        // Add functionality to the delete button
        deleteBtn.addEventListener('click', function() {
            taskContainer.removeChild(task);
        });
    }
});
