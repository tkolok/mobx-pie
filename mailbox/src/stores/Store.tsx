import * as React from 'react';
import {observable} from 'mobx';

import CFolder from '../components/contents/CFolder';
import CLoader from '../components/contents/CLoader';
import CRead from '../components/contents/CRead';
import CWrite from '../components/contents/CWrite';
import WebService from '../services/WebService';
import IMailbox from '../classes/IMailbox';
import Mail, {IMail} from '../classes/Mail';

export class Store {
    @observable
    public content: JSX.Element = <CLoader/>;
    @observable
    public inbox: Mail[] = [];
    @observable
    public outbox: Mail[] = [];
    @observable
    public sending: Mail[] = [];

    constructor() {
        WebService.getMailbox()
            .then((result: IMailbox) => {
                this.inbox = result.inbox.map((mail: IMail): Mail => new Mail(mail));
                this.outbox = result.outbox.map((mail: IMail): Mail => new Mail(mail));
                this.openInbox();
            });
    }

    public openInbox(): void {
        this.content = <CFolder mails={this.inbox} type='IN'/>;
    }

    public openMail(mail: Mail): void {
        mail.unread = false;
        this.content = <CRead mail={mail}/>;
    }

    public openNewMail(mail?: Mail): void {
        this.content = <CWrite mail={mail}/>;
    }

    public openOutbox(): void {
        this.content = <CFolder mails={this.outbox} type='OUT'/>;
    }

    public openSending(): void {
        this.content = <CFolder mails={this.sending} type='SENDING'/>;
    }

    public sendMail(mail: Mail): void {
        this.sending.push(mail);
        this.openSending();
        WebService.sendMail(mail)
            .then((result: IMail) => {
                const index: number = this.sending.indexOf(mail);
                this.sending.splice(index, 1);
                this.outbox.push(new Mail(result));
            });
    }
}

const store: Store = new Store();
export default store;
