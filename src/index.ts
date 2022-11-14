import { Action } from '@the-standard/types';
import { ServiceRuntimeClient } from './clients/service-runtimes/service-runtime-client';

const client = new ServiceRuntimeClient();

export function createRuntime<T>(executable: Action<T>) {
    return client.createRuntime<T>(executable);
}

export function createAsyncRuntime<T>(executable: Action<Promise<T>>) {
    return client.createAsyncRuntime<T>(executable);
}
