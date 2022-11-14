import { JoinPartialClasses } from '@the-standard/partials';
import { RuntimeServiceExceptions } from './runtime-service.exceptions';
import { RuntimeServiceValidations } from './runtime-service.validations';

export class RuntimeServiceOperations extends JoinPartialClasses(
    RuntimeServiceValidations,
    RuntimeServiceExceptions
) {}
