import * as React from 'react';
import {observer} from 'mobx-react';

import CMail from './CMail';
import Mail from '../../classes/Mail';

@observer
class CFolder extends React.Component<{mails: Mail[], type: string}, any> {
    private renderContent(): JSX.Element {
        const mails: Mail[] = this.props.mails;

        if (!mails.length) {
            return <h4>This folder is empty.</h4>;
        }

        const type: string = this.props.type;
        const direction: string = type === 'IN' ? 'From' : 'To';

        return (
            <table>
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>{direction}</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {mails.map((mail: Mail, index: number): JSX.Element => <CMail mail={mail} type={type} key={index}/>)}
                </tbody>
            </table>
        );
    }

    public render(): JSX.Element {
        let title: string = null;
        switch (this.props.type) {
            case 'IN':
                title = 'Inbox';
                break;
            case 'OUT':
                title = 'Outbox';
                break;
            case 'SENDING':
                title = 'Sending';
                break;
            default:
                title = 'What are you doing?!';
        }

        return (
            <div>
                <h3>{title}</h3>
                <hr/>
                {this.renderContent()}
            </div>
        );
    }
}

export default CFolder;
