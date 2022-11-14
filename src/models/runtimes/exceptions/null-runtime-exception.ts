import { Exception } from '@the-standard/exceptions';

export class NullRuntimeException extends Exception {
    constructor() {
        super('Runtime is null.');
    }
}
