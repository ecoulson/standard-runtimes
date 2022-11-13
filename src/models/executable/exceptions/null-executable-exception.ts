import { Exception } from '@the-standard/exceptions';

export class NullExecutableException extends Exception {
    constructor() {
        super('Executable is null.');
    }
}
