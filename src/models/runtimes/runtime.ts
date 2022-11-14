import { Action, Func, Nullable } from '@the-standard/types';

export class Runtime<T> {
    constructor(
        public logic: Nullable<Action<T>> = null,
        public exceptionHandler: Nullable<Func<T, [Action<T>]>> = null
    ) {}
}
