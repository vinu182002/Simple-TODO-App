// Function to add a new to-do
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todoList');

        // Create new list item
        const li = document.createElement('li');

        // Create text span
        const span = document.createElement('span');
        span.textContent = todoText;

        // Create buttons div
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('todo-buttons');

        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Mark as Read';
        completeBtn.classList.add('complete');
        completeBtn.onclick = function () {
            li.classList.toggle('completed');
            completeBtn.textContent = li.classList.contains('completed') ? 'Unmark' : 'Mark as Read';
        };

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.onclick = function () {
            li.remove();
        };

        // Append buttons to the div
        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);

        // Append span and buttons div to the li
        li.appendChild(span);
        li.appendChild(buttonsDiv);

        // Append li to the to-do list
        todoList.appendChild(li);

        // Clear the input field
        todoInput.value = '';
    }
}
