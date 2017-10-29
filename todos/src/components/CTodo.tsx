import * as React from 'react';
import {observer} from 'mobx-react';

import Todo from '../classes/Todo';

@observer
class CTodo extends React.Component<{todo: Todo}, any> {
    public render(): JSX.Element {
        const todo: Todo = this.props.todo;
        return (
            <li onClick={() => todo.changeCompleted()}>
                {todo.completed ? <s>{todo.text}</s> : todo.text}
            </li>
        );
    }
}

export default CTodo;
