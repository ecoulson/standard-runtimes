import { ExceptionHandler } from '../exception-handlers/exception-handler';
import { Executable } from '../executable/executable';

export class Runtime<T> {
    constructor(
        public id?: string,
        public logic?: Executable<T>,
        public exceptionHandler?: ExceptionHandler<T>
    ) {}
}
