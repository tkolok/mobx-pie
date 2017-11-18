import * as React from 'react';
import {observer} from 'mobx-react';

import Color from '../classes/Color';

@observer
class CColor extends React.Component<{color: Color}, any> {
    private static renderRow(name: string, value: number, onChange: Function): JSX.Element {
        return (
            <span>
                {name}
                &nbsp;
                <input max={255}
                       min={0}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(+e.target.value)}
                       type="range"
                       value={value}/>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(+e.target.value)}
                       type="number"
                       value={value}/>
            </span>
        )
    }

    public render(): JSX.Element {
        const color = this.props.color;

        return (
            <div>
                {CColor.renderRow('Red', color.red, (value: number) => color.setRed(value))}
                <br/>
                {CColor.renderRow('Green', color.green, (value: number) => color.setGreen(value))}
                <br/>
                {CColor.renderRow('Blue', color.blue, (value: number) => color.setBlue(value))}
            </div>
        );
    }
}

export default CColor;
