import * as React from 'react';

import store from '../store/Store';
import CItem from './CItem';

class CRoot extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <ul>
                <CItem item={store.root}/>
            </ul>
        );
    }
}

export default CRoot;
