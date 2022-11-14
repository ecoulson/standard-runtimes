import { Runtime } from '../../models/runtimes/runtime';
import { IRuntimeBroker } from './runtime-broker.interface';

export class RuntimeBroker implements IRuntimeBroker {
    private readonly runtimeLookup: Map<string, Runtime<any>>;

    constructor() {
        this.runtimeLookup = new Map();
    }

    storeRuntime<T>(runtime: Runtime<T>): Runtime<T> {
        this.runtimeLookup.set(runtime.id as string, runtime);
        return runtime;
    }

    getRuntimeById<T>(id: string): Runtime<T> | null {
        return this.runtimeLookup.get(id) as Runtime<T> | null;
    }
}
