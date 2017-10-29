import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import store from '../stores/Store';

@observer
class CAddTodo extends React.Component<any, any> {
    @observable
    private text: string = '';

    private addTodo(): void {
        const trim: string = this.text.trim();
        if (trim) {
            store.addTodo(trim);
            this.text = '';
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.text = e.target.value}
                       value={this.text}/>
                <button onClick={() => this.addTodo()}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default CAddTodo;
