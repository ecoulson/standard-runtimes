import { Action, Func } from '@the-standard/types';

export interface IRuntimeClient<T> {
    execute(): T;
    withLogic(logic: Action<T>): IRuntimeClient<T>;
    withExceptionHandler(
        exceptionHandler: Func<T, [Action<T>]>
    ): IRuntimeClient<T>;
}
