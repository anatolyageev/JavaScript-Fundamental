import Model from './Model.js';
import View from './View.js';

export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View();
        this.model.loadDefaultData(this.onLoadData);
        this.view.addListeners(
            this.onTodoClick,
            this.allTodosDone,
            this.allTodosNotDone,
            this.addTodo
        )
    }

    onLoadData = () =>{
        console.log('data is load');
        console.log(this)
        this.view.render(this.model.todos);
    }

    allTodosDone = () => {
        this.model.setIsDone();
        this.view.render(this.model.todos);
     
    }

    allTodosNotDone = () => {
        this.model.setIsNotDone();
        this.view.render(this.model.todos);
    }

    onTodoClick(ev) {
        console.log('click to do', ev.target);
        console.dir(ev.target);
    
        const id = ev.target.dataset.id;
        console.log('ID: ', id);
        this.model.setByClick(id);
        this.view.render(this.model.todos);
    }

    addTodo() {
        let text = this.view.getNewTodo();
        console.log('new text ', text.value);
        this.model.addNewItem(text.value);
        this.view.render(this.model.todos);
    }

    
}