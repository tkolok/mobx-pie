import {observable} from 'mobx';

import Todo from '../classes/Todo';

export class Store {
    public static readonly ACTIVE: string = 'ACTIVE';
    public static readonly ALL: string = 'ALL';
    public static readonly COMPLETED: string = 'COMPLETED';

    @observable
    public todos: Todo[] = [];
    @observable
    public visibility: string = Store.ALL;

    public addTodo(text: string): void {
        this.todos.push(new Todo(text));
    }

    public getTodos(): Todo[] {
        switch (this.visibility) {
            case Store.ACTIVE: return this.todos.filter((todo: Todo): boolean => !todo.completed);
            case Store.COMPLETED: return this.todos.filter((todo: Todo): boolean => todo.completed);
            default: return this.todos;
        }
    }
}

const store: Store = new Store();
export default store;
