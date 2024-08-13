document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const saveBtn = document.getElementById('save-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `${task}<button class="btn btn-danger btn-sm ms-2" onclick="this.parentElement.remove()">Delete</button>`;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });

    saveBtn.addEventListener('click', () => {
        const tasks = Array.from(todoList.children).map(li => li.textContent.replace('Delete', '').trim());
        const blob = new Blob([tasks.join('\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'todo-list.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
});
