import * as React from 'react';
import {observer} from 'mobx-react';

import store from '../../stores/Store';
import Mail from '../../classes/Mail';

@observer
class CMail extends React.Component<{mail: Mail, type: string}, any> {
    public render(): JSX.Element {
        const mail: Mail = this.props.mail;
        const address: string = this.props.type === 'IN' ? mail.from : mail.to;

        return (
            <tr onClick={() => store.openMail(mail)}>
                <td>{mail.unread ? '+' : ''}</td>
                <td>{address}</td>
                <td>{mail.title}</td>
            </tr>
        );
    }
}

export default CMail;
