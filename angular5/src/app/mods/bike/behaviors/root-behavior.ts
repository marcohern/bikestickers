import { environment } from '../../../../environments/environment';
import { Flag } from '../models/flag';

export class RootBehavior {
    root:string = '';

    constructor() {
        this.root = environment.root;
    }
}
