import { Runtime } from '../../models/runtimes/runtime';

export interface IRuntimeBroker {
    storeRuntime<T>(runtime: Runtime<T>): Runtime<T>;
    getRuntimeById<T>(id: string): Runtime<T> | null;
}
