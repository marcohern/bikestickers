import { Flag } from './flag'

export class Sticker {
    flag:Flag = null;
    fname:string = '';
    lname:string = '';

    constructor() {
        this.flag = new Flag();
    }
}
