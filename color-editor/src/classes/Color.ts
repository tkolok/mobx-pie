import {observable} from 'mobx';

export interface IColor {
    blue: number;
    green: number;
    red: number;
}

class Color implements IColor {
    @observable
    public blue: number = 0;
    @observable
    public green: number = 0;
    @observable
    public red: number = 0;

    public setBlue(blue: number): void {
        this.blue = this.setValue(blue);
    }

    public setGreen(green: number): void {
        this.green = this.setValue(green);
    }

    public setRed(red: number): void {
        this.red = this.setValue(red);
    }

    private setValue(value: number): number {
        return Math.floor(Math.min(Math.max(value, 0), 255));
    }
}

export default Color;
