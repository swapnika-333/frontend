const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderList();
}

function renderList() {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.padding = '10px';
    li.style.borderBottom = '1px solid #ccc';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;
    taskSpan.style.flexGrow = '1';

    if (task.completed) {
      taskSpan.style.textDecoration = 'line-through';
      taskSpan.style.color = 'gray';
    } else {
      taskSpan.style.textDecoration = 'none';
      taskSpan.style.color = 'black';
    }

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '5px';

    // ✅ Done Button
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.style.backgroundColor = '#4CAF50';  // Green
    doneBtn.style.color = 'white';
    doneBtn.style.border = 'none';
    doneBtn.style.padding = '5px 8px';
    doneBtn.style.cursor = 'pointer';
    doneBtn.style.borderRadius = '4px';

    doneBtn.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveAndRender();
    };  

    // ✅ Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.backgroundColor = '#2196F3';  // Blue
    editBtn.style.color = 'white';
    editBtn.onclick = () => {
      const newText = prompt('Edit task:', task.text);
      if (newText !== null && newText !== '') {
        tasks[index].text = newText;
        saveAndRender();
      }
    };
    
    // ✅ Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.backgroundColor = '#f44336';  // Red
    deleteBtn.style.color = 'white';

    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveAndRender();
    };

    actions.append(doneBtn, editBtn, deleteBtn);
    li.append(taskSpan, actions);
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTask = input.value.trim();
  if (newTask !== '') {
    tasks.push({ text: newTask, completed: false });
    input.value = '';
    saveAndRender();
  }
}); 

renderList();