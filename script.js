const list = document.getElementById('lijst');

const getTodoItemOutDOM = async function(id) {
    await deleteTodo(id);
    addTodoListToDOM();
};

addTodoListToDOM = async function() {
    list.innerHTML = '';
    const todos = await getTodos();
    todos.forEach(todo => {
        const newLi = document.createElement('li');
        const newDiv = document.createElement('div');
        newDiv.innerText = todo.description;
        newLi.appendChild(newDiv);
        const newImg = document.createElement('img');
        newImg.src = "prullenbak.png";
        newImg.addEventListener("click", () => getTodoItemOutDOM(todo._id));
        newLi.appendChild(newImg);
        list.appendChild(newLi);
    });
};

addTodoListToDOM();

const newTodoItem = document.getElementById('nieuwetaak');

const addNewTodoToList = async function() {
    const newTodoValue = newTodoItem.value;
    const newTodoText = '{description: ' + newTodoValue + ', done: false}';
    console.log(newTodoText);
    await postTodo(newTodoText);
    await addTodoListToDOM();
};

const addButton = document.getElementById('voegtoe');
addButton.addEventListener("click", () => addNewTodoToList());