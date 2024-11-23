<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #343a40; /* Dark Mode Default */
            color: #ffffff;
            transition: background-color 0.3s, color 0.3s;
        }
        .light-mode {
            background-color: #f8f9fa; /* Light Mode */
            color: #343a40;
        }
        .container {
            margin-top: 50px;
            padding: 20px; /* Adjust spacing on left and right */
        }
        .completed {
            text-decoration: line-through;
            color: #868e96;
        }
        .light-mode .completed {
            color: #6c757d;
        }
        .light-mode .list-group-item {
            background-color: #495057;
            color: #ffffff;
        }
        .light-mode .list-group-item:hover {
            background-color: #6c757d;
        }
        .priority-high {
            font-weight: bold;
            color: #dc3545; /* Red */
        }
        .priority-normal {
            color: #007bff; /* Blue */
        }
        .priority-critical {
            color: #ffc107; /* Yellow */
        }
        .critical-icon {
            color: #dc3545; /* Red */
            margin-right: 5px;
        }
    </style>
</head>
<body class="dark-mode">
    <div class="m-4">
        <h2 class="text-center">To Do List</h2>
        <div class="text-center mb-3">
            <button class="btn btn-secondary" id="toggleThemeBtn">Turn On Light Mode</button>
        </div>
        <div class="input-group mb-3">
            <input type="text" id="taskInput" class="form-control" placeholder="Add new task..." aria-label="New task">
            <select id="prioritySelect" class="form-control">
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-primary" id="addTaskBtn">Add</button>
            </div>
        </div>
        <div class="mb-3">
            <button class="btn btn-info" id="showAllBtn">All Tasks</button>
            <button class="btn btn-success" id="showCompletedBtn">Completed</button>
            <button class="btn btn-warning" id="showPendingBtn">Pending</button>
        </div>
        <ul class="list-group" id="taskList"></ul>
    </div>

    <script>
        const taskInput = document.getElementById('taskInput');
        const prioritySelect = document.getElementById('prioritySelect');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');
        const toggleThemeBtn = document.getElementById('toggleThemeBtn');
        const showAllBtn = document.getElementById('showAllBtn');
        const showCompletedBtn = document.getElementById('showCompletedBtn');
        const showPendingBtn = document.getElementById('showPendingBtn');

        let tasks = JSON.parse(localStorage.getItem('tasks')) || []; /* Load from Local Storage */
        let isDarkMode = true; /* Dark Mode Default */

        function renderTasks(filter = 'all') {
            taskList.innerHTML = '';
            const filteredTasks = tasks.filter(task => {
                if (filter === 'completed') return task.completed;
                if (filter === 'pending') return !task.completed;
                return true;
            });

            filteredTasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.className = `list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`;
                const criticalIcon = task.priority === 'critical' ? '<span class="critical-icon">⚠️</span>' : '';
                const priorityClass = task.priority === 'high' ? 'priority-high' : (task.priority === 'critical' ? 'priority-critical' : 'priority-normal');
                
                li.innerHTML = `
                    <span class="${priorityClass}">${criticalIcon}${task.text} (${task.priority})</span>
                    <div>
                        <button class="btn btn-success btn-sm mr-2" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                        <button class="btn btn-warning btn-sm mr-2" onclick="editTask(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        }

        function addTask() {
            const taskText = taskInput.value.trim();
            const taskPriority = prioritySelect.value;
            if (taskText) {
                tasks.push({ text: taskText, priority: taskPriority, completed: false });
                taskInput.value = '';
                renderTasks();
                localStorage.setItem('tasks', JSON.stringify(tasks)); /* Save to Local Storage */
            }
        }

        function toggleComplete(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
            localStorage.setItem('tasks', JSON.stringify(tasks)); /* Save to Local Storage */
        }

        function editTask(index) {
            const newTaskText = prompt('Edit the task:', tasks[index].text);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                tasks[index].text = newTaskText.trim();
                renderTasks();
                localStorage.setItem('tasks', JSON.stringify(tasks)); /* Save to Local Storage */
            }
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
            localStorage.setItem('tasks', JSON.stringify(tasks)); /* Save to Local Storage */
        }

        function toggleTheme() {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);
            document.body.classList.toggle('light-mode', !isDarkMode); /* For Light Mode */
            toggleThemeBtn.textContent = isDarkMode ? 'Turn On Light Mode' : 'Turn On Dark Mode';
        }

        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
        toggleThemeBtn.addEventListener('click', toggleTheme);
        showAllBtn.addEventListener('click', () => renderTasks('all'));
        showCompletedBtn.addEventListener('click', () => renderTasks('completed'));
        showPendingBtn.addEventListener('click', () => renderTasks('pending'));

        renderTasks(); /* Show Tasks on Page Load */
    </script>
</body>
</html>
