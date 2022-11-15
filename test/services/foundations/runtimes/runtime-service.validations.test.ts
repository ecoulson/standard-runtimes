import { IllegalRuntimeException } from '../../../../src/models/runtimes/exceptions/illegal-runtime-exception';
import { NullRuntimeException } from '../../../../src/models/runtimes/exceptions/null-runtime-exception';
import { Runtime } from '../../../../src/models/runtimes/runtime';
import { RuntimeValidationException } from '../../../../src/services/foundations/runtimes/exceptions/runtime-validation-exception';
import { RuntimeService } from '../../../../src/services/foundations/runtimes/runtime-service';

describe('Runtime Service Validations Test Suite', () => {
    const service = new RuntimeService<number>();

    describe('executeRuntime', () => {
        test('Should throw an null runtime exception when the runtime is null', () => {
            const inputRuntime = null as any;
            const innerException = new NullRuntimeException();
            const expectedException = new RuntimeValidationException(
                innerException
            );

            const action = () => service.executeRuntime(inputRuntime);
            expect(action).toThrowException(expectedException);
        });

        test('Should throw an illegal runtime exception when the logic is null', () => {
            const inputRuntime = new Runtime<number>(null, null);
            const innerException = new IllegalRuntimeException(
                new Map([['logic', ['Logic can not be null.']]])
            );
            const expectedException = new RuntimeValidationException(
                innerException
            );

            const action = () => service.executeRuntime(inputRuntime);
            expect(action).toThrowException(expectedException);
        });
    });

    describe('executeAsyncRuntime', () => {
        test('Should throw an null runtime exception when the runtime is null', async () => {
            const inputRuntime = null as any;
            const innerException = new NullRuntimeException();
            const expectedException = new RuntimeValidationException(
                innerException
            );

            const action = () => service.executeAsyncRuntime(inputRuntime);
            await expect(action).toThrowExceptionAsync(expectedException);
        });

        test('Should throw an illegal runtime exception when the logic is null', async () => {
            const inputRuntime = new Runtime<Promise<number>>(null, null);
            const innerException = new IllegalRuntimeException(
                new Map([['logic', ['Logic can not be null.']]])
            );
            const expectedException = new RuntimeValidationException(
                innerException
            );

            const action = () => service.executeAsyncRuntime(inputRuntime);
            await expect(action).toThrowExceptionAsync(expectedException);
        });
    });
});
