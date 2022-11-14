import { tryCatch } from '@the-standard/exception-handlers';
import { Action } from '@the-standard/types';
import { IllegalRuntimeException } from '../../../models/runtimes/exceptions/illegal-runtime-exception';
import { NullRuntimeException } from '../../../models/runtimes/exceptions/null-runtime-exception';
import { RuntimeValidationException } from './exceptions/runtime-validation-exception';

export class RuntimeServiceExceptions<T> {
    protected executeRuntimeExceptionHandler(logic: Action<T>) {
        return tryCatch(logic)
            .handle(
                [IllegalRuntimeException, NullRuntimeException],
                (exception) => new RuntimeValidationException(exception)
            )
            .execute();
    }

    protected executeAsyncRuntimeExceptionHandler(logic: Action<Promise<T>>) {
        return tryCatch(logic)
            .handle(
                [IllegalRuntimeException, NullRuntimeException],
                (exception) => new RuntimeValidationException(exception)
            )
            .execute();
    }
}
