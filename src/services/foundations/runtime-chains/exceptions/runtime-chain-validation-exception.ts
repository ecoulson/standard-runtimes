import { Exception } from '@the-standard/exceptions';

export class RuntimeChainValidationException extends Exception {
    constructor(innerException: Exception) {
        super(
            'Runtime chain validation exception, contact support.',
            innerException
        );
    }
}
