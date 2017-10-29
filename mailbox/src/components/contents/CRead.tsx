import * as React from 'react';
import {observer} from 'mobx-react';

import store from '../../stores/Store';
import Mail from '../../classes/Mail';

@observer
class CRead extends React.Component<{mail: Mail}, any> {
    public render(): JSX.Element {
        const mail: Mail = this.props.mail;

        return (
            <div>
                <h3>{mail.title} <small>({mail.from})</small></h3>
                <hr/>
                {mail.text}
                <div>
                    <button onClick={() => store.openNewMail(mail)}>
                        Reply
                    </button>
                </div>
            </div>
        );
    }
}

export default CRead;
