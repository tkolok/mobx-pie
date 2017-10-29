import * as React from 'react';
import {observer} from 'mobx-react';

import store, {Store} from '../stores/Store';

@observer
class CVisibility extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <button onClick={() => store.visibility = Store.ALL}>
                    ALL
                </button>
                <button onClick={() => store.visibility = Store.ACTIVE}>
                    ACTIVE
                </button>
                <button onClick={() => store.visibility = Store.COMPLETED}>
                    COMPLETED
                </button>
            </div>
        );
    }
}

export default CVisibility;
