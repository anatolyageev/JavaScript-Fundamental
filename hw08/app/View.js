export default class View {
    list = document.querySelector('.todos-list');

    addListeners(onTodoClick, allTodosDone, allTodosNotDone,addTodo){
        document.querySelector('.todos-list').addEventListener('click', onTodoClick);
        document.querySelector('.mark-all-btn').addEventListener('click', allTodosDone);
        document.querySelector('.reset-btn').addEventListener('click', allTodosNotDone);
        document.querySelector('.add-btn').addEventListener('click', addTodo);
        
    }

    render(data) {
        this.list.innerHTML = data.map(todo => {
            const className = todo.isDone ? 'class = "done"' : '';
            return `<li ${className} data-id=${todo.id}>${todo.text}</li>`
        }).join('');
    }

    getNewTodo(){
        let text = document.querySelector('.form-control');
        console.log('new text ', text.value);
        return text.value;
    }

}