import { JoinPartialClasses } from '@the-standard/partials';
import { IIdBroker } from '../../../brokers/ids/id-broker.interface';
import { IRuntimeBroker } from '../../../brokers/runtimes/runtime-broker.interface';
import { RuntimeServiceExceptions } from './runtime-service.exceptions';
import { RuntimeServiceValidations } from './runtime-service.validations';

export class RuntimeServiceOperations extends JoinPartialClasses(
    RuntimeServiceValidations,
    RuntimeServiceExceptions
) {
    constructor(
        protected readonly runtimeBroker: IRuntimeBroker,
        protected readonly idBroker: IIdBroker
    ) {
        super();
    }
}
