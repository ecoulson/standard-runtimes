import { Exception } from '@the-standard/exceptions';

export class RuntimeValidationException extends Exception {
    constructor(innerException: Exception) {
        super('Runtime validation exception, contact support.', innerException);
    }
}
