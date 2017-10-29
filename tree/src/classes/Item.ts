import {observable} from 'mobx';

export interface IItem {
    items: IItem[];
    text: string;
}

class Item implements IItem {
    @observable
    public items: Item[] = [];
    @observable
    public text: string = '';
}

export default Item;