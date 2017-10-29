import * as React from 'react';
import {observer} from 'mobx-react';

import CAddTodo from './CAddTodo';
import CTodo from './CTodo';
import CVisibility from './CVisibility';
import store from '../stores/Store';
import Todo from '../classes/Todo';

@observer
class CRoot extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <CAddTodo/>
                <ul>
                    {store.getTodos().map((todo: Todo, index: number): JSX.Element => <CTodo todo={todo} key={index}/>)}
                </ul>
                <CVisibility/>
            </div>
        );
    }
}

export default CRoot;
