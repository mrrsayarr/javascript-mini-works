<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            transition: background-color 0.3s, color 0.3s;
        }
        .dark-mode {
            background-color: #343a40;
            color: #ffffff;
        }
        .container {
            margin-top: 50px;
        }
        .completed {
            text-decoration: line-through;
            color: #6c757d;
        }
        .dark-mode .completed {
            color: #868e96;
        }
        .dark-mode .list-group-item {
            background-color: #495057;
            color: #ffffff;
        }
        .dark-mode .list-group-item:hover {
            background-color: #6c757d;
        }
        .priority-high {
            font-weight: bold;
            color: #dc3545; /* Kırmızı */
        }
        .priority-normal {
            color: #007bff; /* Mavi */
        }
        .priority-critical {
            color: #ffc107; /* Sarı */
        }
        .critical-icon {
            color: #dc3545; /* Kırmızı */
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="text-center">To Do List</h2>
        <div class="text-center mb-3">
            <button class="btn btn-secondary" id="toggleThemeBtn">Karanlık Modu Aç</button>
        </div>
        <div class="input-group mb-3">
            <input type="text" id="taskInput" class="form-control" placeholder="Yeni görev ekle..." aria-label="Yeni görev">
            <select id="prioritySelect" class="form-control">
                <option value="normal">Normal</option>
                <option value="high">Yüksek</option>
                <option value="critical">Kritik</option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-primary" id="addTaskBtn">Ekle</button>
            </div>
        </div>
        <div class="mb-3">
            <button class="btn btn-info" id="showAllBtn">Tüm Görevler</button>
            <button class="btn btn-success" id="showCompletedBtn">Tamamlananlar</button>
            <button class="btn btn-warning" id="showPendingBtn">Tamamlanmayanlar</button>
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

        let tasks = [];
        let isDarkMode = false;

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
                        <button class="btn btn-success btn-sm mr-2" onclick="toggleComplete(${index})">${task.completed ? 'Geri Al' : 'Tamamla'}</button>
                        <button class="btn btn-warning btn-sm mr-2" onclick="editTask(${index})">Düzenle</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Sil</button>
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
            }
        }

        function toggleComplete(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }

        function editTask(index) {
            const newTaskText = prompt('Görevi düzenleyin:', tasks[index].text);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                tasks[index].text = newTaskText.trim();
                renderTasks();
            }
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        function toggleTheme() {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);
            toggleThemeBtn.textContent = isDarkMode ? 'Aydınlık Modu Aç' : 'Karanlık Modu Aç';
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
    </script>
</body>
</html>
