import { NullExceptionHandlerExecutorException } from '../../../../src/models/exception-handlers/exceptions/null-exception-handler-executor-exception';
import { NullExecutableException } from '../../../../src/models/executable/exceptions/null-executable-exception';
import { RuntimeChainValidationException } from '../../../../src/services/foundations/runtime-chains/exceptions/runtime-chain-validation-exception';
import { RuntimeChainService } from '../../../../src/services/foundations/runtime-chains/runtime-chain-service';

describe('Runtime Chain Service Validations Test Suite', () => {
    const service = new RuntimeChainService();

    describe('createRuntimeChain', () => {
        test('Should throw a validation exception when the executable is null', () => {
            const nullException = new NullExecutableException();
            const expectedException = new RuntimeChainValidationException(
                nullException
            );
            const executable = null as any;

            const action = () => service.createRuntimeChain(executable);
            expect(action).toThrowException(expectedException);
        });

        test('Should throw a validation exception when the exceptionHandler is null', () => {
            const nullException = new NullExceptionHandlerExecutorException();
            const expectedException = new RuntimeChainValidationException(
                nullException
            );
            const executable = () => {
                return;
            };
            const exceptionHandler = null as any;

            const action = () =>
                service
                    .createRuntimeChain(executable)
                    .exceptionHandler(exceptionHandler);
            expect(action).toThrowException(expectedException);
        });
    });

    describe('createAsyncRuntimeChain', () => {
        test('Should throw a validation exception when the executable is null', () => {
            const nullException = new NullExecutableException();
            const expectedException = new RuntimeChainValidationException(
                nullException
            );
            const executable = null as any;

            const action = () => service.createAsyncRuntimeChain(executable);
            expect(action).toThrowException(expectedException);
        });

        test('Should throw a validation exception when the exceptionHandler is null', () => {
            const nullException = new NullExceptionHandlerExecutorException();
            const expectedException = new RuntimeChainValidationException(
                nullException
            );
            const executable = () => Promise.resolve();
            const exceptionHandler = null as any;

            const action = () =>
                service
                    .createAsyncRuntimeChain(executable)
                    .exceptionHandler(exceptionHandler);
            expect(action).toThrowException(expectedException);
        });
    });
});
