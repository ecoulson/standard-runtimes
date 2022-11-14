import { Action, Func } from '@the-standard/types';

export class Runtime<T> {
    constructor(
        public id?: string,
        public logic?: Action<T>,
        public exceptionHandler?: Func<T, [Action<T>]>
    ) {}
}
