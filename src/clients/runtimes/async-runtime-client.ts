import { Action, Func, Nullable } from '@the-standard/types';
import { Runtime } from '../../models/runtimes/runtime';
import { RuntimeService } from '../../services/foundations/runtimes/runtime-service';
import { IRuntimeService } from '../../services/foundations/runtimes/runtime-service.interface';
import { IRuntimeClient } from './runtime-client.interface';

export class AsyncRuntimeClient<T> implements IRuntimeClient<Promise<T>> {
    private readonly runtimeService: IRuntimeService<T>;
    private logic: Nullable<Action<Promise<T>>>;
    private exceptionHandler: Nullable<Func<Promise<T>, [Action<Promise<T>>]>>;

    constructor() {
        this.runtimeService = new RuntimeService();
    }

    withLogic(logic: Action<Promise<T>>) {
        this.logic = logic;
        return this;
    }

    withExceptionHandler(
        exceptionHandler: Func<Promise<T>, [Action<Promise<T>>]>
    ) {
        this.exceptionHandler = exceptionHandler;
        return this;
    }

    execute(): Promise<T> {
        return this.runtimeService.executeAsyncRuntime(
            new Runtime(this.logic, this.exceptionHandler)
        );
    }
}
