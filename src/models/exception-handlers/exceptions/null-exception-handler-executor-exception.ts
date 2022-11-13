import { Exception } from '@the-standard/exceptions';

export class NullExceptionHandlerExecutorException extends Exception {
    constructor() {
        super('Exception handler executor is null.');
    }
}
