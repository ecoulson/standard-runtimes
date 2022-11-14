import { Runtime } from '../../../models/runtimes/runtime';

export interface IRuntimeService<T> {
    executeRuntime(runtime: Runtime<T>): T;
}
