const list = document.getElementById('lijst');

const getTodoItemOutDOM = async function(id) {
    const deleteLi = document.getElementById(id);
    list.removeChild(deleteLi);
    await deleteTodo(id);
};

const updateDoneTodo = async function(id, bool) {
    const updateLi = document.getElementById(id);
    if (bool == false) {
        updateLi.classList.add("done");
        await doneTodo(id);
    } else if (bool == true) {
        updateLi.classList.remove("done");
        await notDoneTodo(id);
    };
};   
    
const makeTodoListItem = (todo) => {
    const newLi = document.createElement('li');
    newLi.setAttribute("id", todo._id);    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    if (todo.done == true) {
        checkbox.checked = true;
        newLi.classList.add("done");
    };
    checkbox.addEventListener("change", () => updateDoneTodo(todo._id, todo.done));
    newLi.appendChild(checkbox);
    const newDiv = document.createElement('div');
    newDiv.innerText = todo.description;
    newLi.appendChild(newDiv);
    const newImg = document.createElement('img');
    newImg.src = "prullenbak.png";
    newImg.addEventListener("click", () => getTodoItemOutDOM(todo._id));
    newLi.appendChild(newImg);
    list.appendChild(newLi);
};

addTodoListToDOM = async function() {
    list.innerHTML = '';
    const todos = await getTodos();
    todos.forEach(todo => {
        makeTodoListItem(todo);
    });
};

addTodoListToDOM();

const newTodoItem = document.getElementById('nieuwetaak');

const addNewTodoToList = async function() {
    const newTodoValue = newTodoItem.value;
    const newTodoText = {description: newTodoValue , done: false};
    console.log(newTodoText);
    await postTodo(newTodoText);
    makeTodoListItem();
};

const addButton = document.getElementById('voegtoe');
addButton.addEventListener("click", () => addNewTodoToList());