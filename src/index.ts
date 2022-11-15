import { Action } from '@the-standard/types';
import { AsyncRuntimeClient } from './clients/runtimes/async-runtime-client';
import { RuntimeClient } from './clients/runtimes/runtime-client';

export function createRuntime<T>(logic: Action<T>): RuntimeClient<T> {
    const client = new RuntimeClient<T>();
    return client.withLogic(logic);
}

export function createAsyncRuntime<T>(
    logic: Action<Promise<T>>
): AsyncRuntimeClient<T> {
    const client = new AsyncRuntimeClient<T>();
    return client.withLogic(logic);
}
