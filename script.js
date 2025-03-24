document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return; 
    }

    const taskList = document.getElementById('taskList');
    const a = document.getElementById('taskList');
    
    
    const listItem = document.createElement('li');
    
   
    const taskText = document.createTextNode(taskInput.value);
    
    
    const deleteButton = document.createElement('button');
    
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    
    
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem); 
    });

    
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    
   
    taskList.appendChild(listItem);
    
    
    taskInput.value = "";
});
