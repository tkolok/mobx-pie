import * as React from 'react';
import {observer} from 'mobx-react';

import CControlButtons from './CControlButtons';
import store from '../stores/Store';

@observer
class CRoot extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <CControlButtons/>
                <hr/>
                {store.content}
            </div>
        );
    }
}

export default CRoot;
