import { Runtime } from '../../../models/runtimes/runtime';

export interface IRuntimeService {
    createRuntime<T>(runtime: Runtime<T>): Runtime<T>;
    executeRuntime<T>(runtime: Runtime<T>): T;
}
