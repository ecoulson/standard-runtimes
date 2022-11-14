import { Exception, ExceptionData } from '@the-standard/exceptions';
import { Nullable } from '@the-standard/types';

export class IllegalRuntimeException extends Exception {
    constructor(details: Nullable<ExceptionData> = null) {
        super('Illegal runtime exception, see details.', null, details);
    }
}
