import {toJS} from 'mobx';

import IMailbox from '../classes/IMailbox';
import {IMail, default as Mail} from '../classes/Mail';

const myAddress: string = 'me@me.com';
const inbox: IMail[] = [
    {
        from: 'webshop@webshop.com',
        text: 'Check our new sales! 45% sales!',
        title: 'New sales',
        to: myAddress,
        unread: true
    },
    {
        from: 'news@paper.com',
        text: 'Nothing happened this week.',
        title: 'Week news',
        to: myAddress,
        unread: false
    },
    {
        from: 'jobs@jobs.com',
        text: 'Check our new jobs!',
        title: 'New jobs',
        to: myAddress,
        unread: false
    },
    {
        from: 'no@virus.com',
        text: 'I am not a virus! Open me!',
        title: 'No virus',
        to: myAddress,
        unread: true
    },
    {
        from: 'spam@spam.com',
        text: 'Blah blah blah...',
        title: 'Spam',
        to: myAddress,
        unread: true
    }
];
const outbox: IMail[] = [
    {
        from: myAddress,
        text: 'I attached presentation.',
        title: 'Presentation',
        to: 'boss@company.com',
        unread: false
    }
];

// Here you can find some unnecessary converting because of I tried to simulate real promises which use plain objects
class WebService {
    public static getMailbox(): Promise<IMailbox> {
        return new Promise((resolve, reject) => {
            const data: IMailbox = {
                inbox,
                outbox
            };
            setTimeout(() => resolve(data), Math.random() * 1500 + 500);
        });
    }

    public static sendMail(mail: Mail): Promise<IMail> {
        // toJS recursively converts an (observable) object to a javascript structure.
        const mailObj: IMail = toJS(mail);
        return new Promise((resolve, reject) => {
            outbox.push(mailObj);
            setTimeout(() => resolve(mailObj), Math.random() * 3000 + 2000);
        });
    }
}

export default WebService;
