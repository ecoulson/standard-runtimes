import { Exception } from '@the-standard/exceptions';
import { Executable } from '../../../../src/models/executable/executable';
import { RuntimeChainService } from '../../../../src/services/foundations/runtime-chains/runtime-chain-service';

describe('Runtime Chain Service Test Suite', () => {
    const service = new RuntimeChainService();

    describe('createServiceRuntimeChain', () => {
        test('Should create and run a simple service runtime chain', () => {
            const executable = jest.fn(() => 2);
            const expectedResult = 2;

            const actualResult = service.createRuntimeChain(executable).run();

            expect(actualResult).toEqual(expectedResult);
            expect(executable).toBeCalledTimes(1);
        });

        test('Should create and add an exception handler to the runtime chain', () => {
            const executable = jest.fn(() => 2);
            const exceptionHandler = jest.fn(
                (givenExecutable: Executable<number>) => {
                    try {
                        return givenExecutable();
                    } catch (error) {
                        throw error;
                    }
                }
            );
            const expectedResult = 2;

            const actualResult = service
                .createRuntimeChain(executable)
                .exceptionHandler(exceptionHandler)
                .run();

            expect(actualResult).toEqual(expectedResult);
            expect(executable).toBeCalledTimes(1);
            expect(exceptionHandler).toBeCalledTimes(1);
        });

        test('Should create and add an exception handler to the runtime chain that throws', () => {
            const thrownError = new Error();
            const executable = jest.fn<number, []>(() => {
                throw thrownError;
            });
            const exceptionHandler = jest.fn(
                (givenExecutable: Executable<number>) => {
                    try {
                        return givenExecutable();
                    } catch (error) {
                        throw Exception.fromError(error);
                    }
                }
            );
            const expectedException = Exception.fromError(thrownError);

            const action = () =>
                service
                    .createRuntimeChain(executable)
                    .exceptionHandler(exceptionHandler)
                    .run();
            expect(action).toThrowException(expectedException);

            expect(executable).toBeCalledTimes(1);
            expect(exceptionHandler).toBeCalledTimes(1);
        });
    });

    describe('createAsyncServiceRuntimeChain', () => {
        test('Should create and run a simple async service runtime chain', async () => {
            const executable = jest.fn(() => Promise.resolve(2));
            const expectedResult = 2;

            const actualResult = await service
                .createAsyncRuntimeChain(executable)
                .run();

            expect(actualResult).toEqual(expectedResult);
            expect(executable).toBeCalledTimes(1);
        });

        test('Should create and add an exception handler to the runtime chain', async () => {
            const executable = jest.fn(() => Promise.resolve(2));
            const exceptionHandler = jest.fn(
                async (givenExecutable: Executable<Promise<number>>) => {
                    try {
                        return givenExecutable();
                    } catch (error) {
                        throw error;
                    }
                }
            );
            const expectedResult = 2;

            const actualResult = await service
                .createAsyncRuntimeChain(executable)
                .exceptionHandler(exceptionHandler)
                .run();

            expect(actualResult).toEqual(expectedResult);
            expect(executable).toBeCalledTimes(1);
            expect(exceptionHandler).toBeCalledTimes(1);
        });

        test('Should create and add an exception handler to the runtime chain that throws', async () => {
            const thrownError = new Error();
            const executable = jest.fn<Promise<number>, []>(() => {
                throw thrownError;
            });
            const exceptionHandler = jest.fn(
                (givenExecutable: Executable<Promise<number>>) => {
                    try {
                        return givenExecutable();
                    } catch (error) {
                        throw Exception.fromError(error);
                    }
                }
            );
            const expectedException = Exception.fromError(thrownError);

            const action = async () =>
                service
                    .createRuntimeChain(executable)
                    .exceptionHandler(exceptionHandler)
                    .run();
            expect(action).toThrowExceptionAsync(expectedException);

            expect(executable).toBeCalledTimes(1);
            expect(exceptionHandler).toBeCalledTimes(1);
        });
    });
});
