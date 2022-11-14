import { IRuntimeBroker } from '../../../brokers/runtimes/runtime-broker.interface';
import { Runtime } from '../../../models/runtimes/runtime';
import { IRuntimeService } from './runtime-service.interface';

export class RuntimeService implements IRuntimeService {
    constructor(private readonly runtimeBroker: IRuntimeBroker) {}

    createRuntime<T>(runtime: Runtime<T>): Runtime<T> {
        throw new Error('Method not implemented.');
    }

    executeRuntime<T>(runtime: Runtime<T>): T {
        throw new Error('Method not implemented.');
    }
}
