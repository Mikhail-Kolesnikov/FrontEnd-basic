document.addEventListener('DOMContentLoaded', function () {
    const addValue = document.getElementById('addValue');
    const todoInput = document.getElementById('Todo');
    const allButton = document.getElementById('all');
    const completedButton = document.getElementById('Completed');
    const activeButton = document.getElementById('active');
    const list = document.getElementById('list');
    let arrTodo = [];

    function renderTodos(filter = 'all') {
        list.innerHTML = '';
        let filterForTodo = arrTodo;
        if (filter === 'completed') {
            filterForTodo = arrTodo.filter(todo => todo.completed);
        } else if (filter === 'active') {
            filterForTodo = arrTodo.filter(todo => !todo.completed);
        }


        filterForTodo.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.textContent = todo.text;


            li.addEventListener('click', () => toggleComplete(todo.id));

            list.appendChild(li); 
        });
    }

    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            arrTodo.push({ id: Date.now(), text: text, completed: false });
            todoInput.value = '';
            renderTodos();
        }
    }

    function toggleComplete(id) {
        const todo = arrTodo.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            renderTodos();
        }
    }
    function loadTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                arrTodo = data.slice(0, 15).map(todo => ({
                    id: todo.id,
                    text: todo.title,
                    completed: todo.completed
                }));
                renderTodos();
            })
            .catch(error => console.error('Error fetching todos:', error));
    }


    addValue.addEventListener('click', addTodo);
    allButton.addEventListener('click', () => renderTodos('all'));
    completedButton.addEventListener('click', () => renderTodos('completed'));
    activeButton.addEventListener('click', () => renderTodos('active'));
    loadTodos();
});

