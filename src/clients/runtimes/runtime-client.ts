import { Action, Func, Nullable } from '@the-standard/types';
import { Runtime } from '../../models/runtimes/runtime';
import { RuntimeService } from '../../services/foundations/runtimes/runtime-service';
import { IRuntimeService } from '../../services/foundations/runtimes/runtime-service.interface';
import { IRuntimeClient } from './runtime-client.interface';

export class RuntimeClient<T> implements IRuntimeClient<T> {
    private readonly runtimeService: IRuntimeService<T>;
    private logic: Nullable<Action<T>>;
    private exceptionHandler: Nullable<Func<T, [Action<T>]>>;

    constructor() {
        this.runtimeService = new RuntimeService();
    }

    withLogic(logic: Action<T>): RuntimeClient<T> {
        this.logic = logic;
        return this;
    }

    withExceptionHandler(
        exceptionHandler: Func<T, [Action<T>]>
    ): RuntimeClient<T> {
        this.exceptionHandler = exceptionHandler;
        return this;
    }

    execute(): T {
        return this.runtimeService.executeRuntime(
            new Runtime(this.logic, this.exceptionHandler)
        );
    }
}
