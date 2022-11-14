import { Exception } from '@the-standard/exceptions';
import { ExceptionData } from '@the-standard/exceptions/lib/models/exceptions/exception-data';
import { Nullable } from '@the-standard/types';

export class IllegalRuntimeException extends Exception {
    constructor(details: Nullable<ExceptionData> = null) {
        super('Illegal runtime exception, see details.', null, details);
    }
}
