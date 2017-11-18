import * as React from 'react';
import {observer} from 'mobx-react';

import Color from '../classes/Color';

@observer
class CColorViewer extends React.Component<{color: Color}, any> {
    public render(): JSX.Element {
        const color = this.props.color;
        const style = {
            backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
            height: '100px',
            width: '100px'
        };

        return <div style={style}/>;
    }
}

export default CColorViewer;
