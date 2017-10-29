import {observable} from 'mobx';

export interface ITodo {
    completed: boolean;
    text: string;
}

class Todo implements ITodo {
    @observable
    public completed: boolean = false;
    @observable
    public text: string = '';

    constructor(text: string) {
        this.text = text;
    }

    public changeCompleted(): void {
        this.completed = !this.completed;
    }
}

export default Todo;
