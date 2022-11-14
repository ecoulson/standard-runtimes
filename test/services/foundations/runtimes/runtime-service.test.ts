import { Exception } from '@the-standard/exceptions';
import { Action } from '@the-standard/types';
import { Runtime } from '../../../../src/models/runtimes/runtime';
import { RuntimeService } from '../../../../src/services/foundations/runtimes/runtime-service';

describe('Runtime Service Test Suite', () => {
    const service = new RuntimeService<number>();

    describe('executeRuntime', () => {
        test('Should execute a runtime successfully', () => {
            const expectedResult = 2;
            const logic = () => expectedResult;
            const exceptionHandler = (logic: Action<number>) => {
                return logic();
            };
            const inputRuntime = new Runtime(logic, exceptionHandler);

            const actualResult = service.executeRuntime(inputRuntime);

            expect(actualResult).toEqual(expectedResult);
        });

        test('Should execute a runtime with no exception handler', () => {
            const expectedResult = 2;
            const logic = () => expectedResult;

            const inputRuntime = new Runtime(logic);

            const actualResult = service.executeRuntime(inputRuntime);

            expect(actualResult).toEqual(expectedResult);
        });

        test('Should execute a runtime that handles an exception', () => {
            const logic: Action<number> = () => {
                throw new Exception();
            };
            const exceptionHandler = (logic: Action<number>) => {
                try {
                    return logic();
                } catch (error) {
                    throw new Exception('Something went wrong.');
                }
            };
            const inputRuntime = new Runtime(logic, exceptionHandler);
            const expectedException = new Exception('Something went wrong.');

            const action = () => service.executeRuntime(inputRuntime);
            expect(action).toThrowException(expectedException);
        });
    });

    describe('executeAsyncRuntime', () => {
        test('Should execute a runtime successfully', async () => {
            const expectedResult = 2;
            const logic = () => Promise.resolve(expectedResult);
            const exceptionHandler = (logic: Action<Promise<number>>) =>
                logic();
            const inputRuntime = new Runtime(logic, exceptionHandler);

            const actualResult = await service.executeAsyncRuntime(
                inputRuntime
            );

            expect(actualResult).toEqual(expectedResult);
        });

        test('Should execute a runtime with no exception handler', async () => {
            const expectedResult = 2;
            const logic = () => Promise.resolve(expectedResult);
            const inputRuntime = new Runtime(logic);

            const actualResult = await service.executeAsyncRuntime(
                inputRuntime
            );

            expect(actualResult).toEqual(expectedResult);
        });

        test('Should execute a runtime that handles an exception', async () => {
            const logic: Action<Promise<number>> = async () => {
                throw new Exception();
            };
            const exceptionHandler = async (logic: Action<Promise<number>>) => {
                try {
                    return await logic();
                } catch (error) {
                    throw new Exception('Something went wrong.');
                }
            };
            const inputRuntime = new Runtime(logic, exceptionHandler);
            const expectedException = new Exception('Something went wrong.');

            const action = () => service.executeAsyncRuntime(inputRuntime);
            await expect(action).toThrowExceptionAsync(expectedException);
        });
    });
});
