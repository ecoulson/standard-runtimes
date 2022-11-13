import { tryCatch } from '@the-standard/exception-handlers';
import { NullExceptionHandlerExecutorException } from '../../../models/exception-handlers/exceptions/null-exception-handler-executor-exception';
import { NullExecutableException } from '../../../models/executable/exceptions/null-executable-exception';
import { Executable } from '../../../models/executable/executable';
import { RuntimeChainValidationException } from './exceptions/runtime-chain-validation-exception';

export class RuntimeChainServiceExceptions {
    createRuntimeChainHandler<T>(executable: Executable<T>) {
        return tryCatch(executable)
            .handle(
                [
                    NullExecutableException,
                    NullExceptionHandlerExecutorException,
                ],
                (exception) => new RuntimeChainValidationException(exception)
            )
            .execute();
    }
}
