import {IMail} from './Mail';

interface IMailbox {
    inbox: IMail[];
    outbox: IMail[];
}

export default IMailbox;
