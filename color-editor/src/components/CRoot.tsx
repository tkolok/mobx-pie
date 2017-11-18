import * as React from 'react';

import store from '../stores/Store';
import CColor from './CColor';
import CColorViewer from './CColorViewer';

class CRoot extends React.Component<any, any> {
    public render(): JSX.Element {
        const color = store.color;

        return (
            <main>
                <CColorViewer color={color}/>
                <CColor color={color}/>
            </main>
        );
    }
}

export default CRoot;
