import { JoinPartialClasses } from '@the-standard/partials';
import { IRuntimeBroker } from '../../../brokers/runtimes/runtime-broker.interface';
import { RuntimeServiceExceptions } from './runtime-service.exceptions';
import { RuntimeServiceValidations } from './runtime-service.validations';

export class RuntimeServiceOperations extends JoinPartialClasses(
    RuntimeServiceValidations,
    RuntimeServiceExceptions
) {
    constructor(private readonly runtimeBroker: IRuntimeBroker) {
        super();
    }
}
