import { Action } from '@the-standard/types';
import { anyOfClass, capture, instance, mock, verify, when } from 'ts-mockito';
import { IIdBroker } from '../../../../src/brokers/ids/id-broker.interface';
import { IRuntimeBroker } from '../../../../src/brokers/runtimes/runtime-broker.interface';
import { Runtime } from '../../../../src/models/runtimes/runtime';
import { RuntimeService } from '../../../../src/services/foundations/runtimes/runtime-service';

describe('Runtime Service Test Suite', () => {
    const mockedRuntimeBroker = mock<IRuntimeBroker>();
    const mockedIdBroker = mock<IIdBroker>();
    const service = new RuntimeService(
        instance(mockedRuntimeBroker),
        instance(mockedIdBroker)
    );

    describe('createRuntime', () => {
        test('Should create a runtime', () => {
            const generatedId = '02f55cc3-b798-4b00-b460-296b3db3f6de';
            const logic = () => {
                return;
            };
            const exceptionHandler = (logic: Action<void>) => logic();
            const inputRuntime = new Runtime(
                undefined,
                logic,
                exceptionHandler
            );
            const expectedRuntime = new Runtime(
                generatedId,
                logic,
                exceptionHandler
            );
            when(mockedIdBroker.generateId()).thenReturn(generatedId);
            when(mockedRuntimeBroker.storeRuntime(inputRuntime)).thenCall(
                (x) => x
            );

            const actualRuntime = service.createRuntime(inputRuntime);
            expect(actualRuntime).toEqual(expectedRuntime);

            verify(mockedIdBroker.generateId()).once();
            verify(mockedRuntimeBroker.storeRuntime(inputRuntime)).once();
        });
    });
});
