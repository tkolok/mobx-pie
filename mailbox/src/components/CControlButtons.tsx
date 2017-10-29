import * as React from 'react';
import {observer} from 'mobx-react';

import store from '../stores/Store';

@observer
class CControlButtons extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <button onClick={() => store.openInbox()}>
                    {store.inbox.length} Inbox
                </button>
                <button onClick={() => store.openOutbox()}>
                    {store.outbox.length} Outbox
                </button>
                <button onClick={() => store.openSending()}>
                    {store.sending.length} Sending
                </button>
                <button onClick={() => store.openNewMail()}>
                    New mail
                </button>
            </div>
        );
    }
}

export default CControlButtons;
