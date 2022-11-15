import { Action } from '@the-standard/types';
import { AsyncRuntimeClient } from './clients/runtimes/async-runtime-client';
import { RuntimeClient } from './clients/runtimes/runtime-client';

export function createRuntime<T>(logic: Action<T>) {
    const client = new RuntimeClient();
    return client.withLogic(logic);
}

export function createAsyncRuntime<T>(logic: Action<Promise<T>>) {
    const client = new AsyncRuntimeClient();
    return client.withLogic(logic);
}
