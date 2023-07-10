window.addEventListener("load", function () {
    const storageKey = "todoData";
    const todoForm = document.querySelector(".todo-form");
    let todoData = JSON.parse(localStorage.getItem(storageKey) || "[]") || [];
    // early return
    if (!todoForm) return;
    function init(arr) {
        if (!Array.isArray(arr)) return;
        arr.forEach((item) => renderTodoItem(item));
    }
    todoForm.addEventListener("submit", handleAddNewTodo);
    function handleRemoveTodo(event) {
        const id = Number(event.target.dataset.key);
        if (!Array.isArray(todoData)) return;
        const todoIndex = todoData.findIndex((todo) => todo.id === id);
        todoData.splice(todoIndex, 1);
        const todoItem = this.parentNode;
        todoItem && todoItem.remove();
        localStorage.setItem(storageKey, JSON.stringify(todoData));
    }
    function renderTodoItem(item) {
        const todoList = document.querySelector(".todo-list");
        const node = document.createElement("div");
        node.setAttribute("class", "todo-item");
        node.innerHTML = /*html*/ `<h3 class="todo-name">${item.title}</h3>
        <div class="todo-actions">
        <button class="todo-edit" data-value="${item}">Edit</button>
        <button class="todo-remove" data-key="${item.id}">Remove</button>
        </div>
    `;
        todoList.append(node);
        const removeList = document.querySelectorAll(".todo-remove");
        removeList.forEach((button) =>
            button.addEventListener("click", handleRemoveTodo)
        );
    }
    function handleAddNewTodo(event) {
        event.preventDefault();
        // data-status 'add'
        const todo = this.elements["todo"].value;
        if (!todo) {
            console.log("Todo can not empty");
            return;
        }
        const todoItem = {
            title: todo,
            id: todoData.length + 1,
        };
        todoData.push(todoItem);
        renderTodoItem(todoItem);
        this.reset();
        localStorage.setItem(storageKey, JSON.stringify(todoData));
        // data-status update
    }
    init(todoData);
});
