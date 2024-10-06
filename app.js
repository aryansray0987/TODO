const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        listItem.appendChild(textSpan);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.classList.add('delete-btn');
        listItem.appendChild(deleteBtn);
        
        todoList.appendChild(listItem);
        todoInput.value = ''; // Clear input field after adding

        // Delete task functionality
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        // Toggle complete functionality
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const gradients = ['bg-gradient-1', 'bg-gradient-2', 'bg-gradient-3', 'bg-gradient-4', 'bg-gradient-5'];
    
    // Get a random index from the gradients array
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    // Apply the random gradient class to the body
    document.body.classList.add(randomGradient);
});
