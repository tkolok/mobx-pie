import * as React from 'react';
import {observer} from 'mobx-react';

import store from '../../stores/Store';
import Mail from '../../classes/Mail';

@observer
class CWrite extends React.Component<{mail?: Mail}, any> {
    private mail: Mail;

    // If you want use 'this.props' attribute in constructor you have to add props parameter to super
    constructor(props: any) {
        super(props);
        this.mail = new Mail();

        const mail: Mail = this.props.mail;
        if (mail) {
            this.mail.title = `RE: ${mail.title}`;
            this.mail.to = mail.from;
        }
        this.mail.unread = true;
        this.mail.from = 'me@me.com';
    }

    public render(): JSX.Element {
        return (
            <div>
                <h3>New mail</h3>
                <hr/>
                <label>To:</label>
                <br/>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.mail.to = e.target.value}
                       type='email'
                       value={this.mail.to}/>
                <br/>
                <label>Title:</label>
                <br/>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.mail.title = e.target.value}
                       value={this.mail.title}/>
                <br/>
                <textarea cols={100}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.mail.text = e.target.value}
                          rows={20}
                          value={this.mail.text}/>
                <br/>
                <button onClick={() => store.sendMail(this.mail)}>
                    Send
                </button>
            </div>
        );
    }
}

export default CWrite;
