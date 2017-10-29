import {observable} from 'mobx';

export interface IMail {
    from: string;
    text: string;
    title: string;
    to: string;
    unread: boolean;
}

class Mail implements IMail {
    @observable
    public from: string = '';
    @observable
    public text: string = '';
    @observable
    public title: string = '';
    @observable
    public to: string = '';
    @observable
    public unread: boolean = false;

    constructor(mail?: IMail) {
        if (mail) {
            this.from = mail.from;
            this.text = mail.text;
            this.title = mail.title;
            this.to = mail.to;
            this.unread = mail.unread;
        }
    }
}

export default Mail;
