import {observable} from 'mobx';

import Color from '../classes/Color';

export class Store {
    @observable
    public color: Color = null;

    constructor() {
        this.color = new Color();
    }
}

const store: Store = new Store();
export default store;
