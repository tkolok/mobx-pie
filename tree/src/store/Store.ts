import {observable} from 'mobx';

import Item from '../classes/Item';

class Store {
    @observable
    public root: Item = null;

    constructor() {
        this.root = Store.generateTree(0);
        console.log(this.root);
    }

    private static generateTree(depth: number): Item {
        const item: Item = new Item();
        item.text = Store.randomName();

        if (depth < 5) {
            const length: number = depth ? Math.floor(Math.random() * 5) : 5;
            if (length) {
                for (let i: number = 0; i < length; i++) {
                    item.items.push(Store.generateTree(depth + 1));
                }
            }
        }
        return item;
    }

    private static randomName(): string {
        let ret: string = '';
        for (let i: number = 0; i < 8; i++) {
            ret += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        return ret;
    }
}

const store: Store = new Store();
export default store;
