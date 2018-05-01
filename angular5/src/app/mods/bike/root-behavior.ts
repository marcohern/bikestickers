import { environment } from '../../../environments/environment';

export class RootBehavior {
    root:string = '';

    constructor() {
        this.root = environment.root;
    }
}
