
import Controller from './Controller.js';

const controller = new Controller();

// function onTodoClick(ev) {
//     console.log('click to do', ev.target);
//     console.dir(ev.target);

//     const id = ev.target.dataset.id;

//     todos.forEach(todo => todo.id == id ? todo.isDone = !todo.isDone : null);
//     render(todos);
// }

// function resetTodos() {
//     todos.forEach(todo => todo.isDone = false);
//     render(todos);
// }



function addTodo() {
    let text = document.querySelector('.form-control');
    console.log('text', text.value);
    console.dir(text);
    let todo = {
        text: text.value,
        isDone: false,
        id: todos.length
    }
    text.value = '';
    todos.push(todo);
    console.log(todos);
    render(todos);
}


//document.querySelector('.todos-list').addEventListener('click', onTodoClick);


// render(todos);

//

// loadDefaultData();

