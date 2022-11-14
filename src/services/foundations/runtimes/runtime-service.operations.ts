import { JoinPartialGenericClasses } from '@the-standard/partials';
import { RuntimeServiceExceptions } from './runtime-service.exceptions';
import { RuntimeServiceValidations } from './runtime-service.validations';

interface IRuntimeServiceOperations<T>
    extends RuntimeServiceValidations<T>,
        RuntimeServiceExceptions<T> {}

type RuntimeServiceOperationsConstructor = new <T>(
    ...args: any[]
) => IRuntimeServiceOperations<T>;

export class RuntimeServiceOperations<
    T
> extends JoinPartialGenericClasses<RuntimeServiceOperationsConstructor>(
    RuntimeServiceValidations,
    RuntimeServiceExceptions
)<T> {}
