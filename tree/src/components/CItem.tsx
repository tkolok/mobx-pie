import * as React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import Item from '../classes/Item';

@observer
class CItem extends React.Component<{item: Item}, any> {
    @observable
    private show: boolean = false;

    private onClick(event: React.MouseEvent<HTMLLIElement>): void {
        this.show = !this.show;
        event.stopPropagation();
    }

    public render(): JSX.Element {
        const item: Item = this.props.item;
        const hasItems: boolean = !!item.items.length;
        const sign: string = hasItems ? (this.show ? '-' : '+') : '';

        return (
            <li onClick={(event: React.MouseEvent<HTMLLIElement>) => this.onClick(event)}>
                {sign} {item.text}
                {hasItems && this.show &&
                    <ul>{item.items.map((i: Item, index: number): JSX.Element => <CItem item={i} key={index}/>)}</ul>}
            </li>
        );
    }
}

export default CItem;
