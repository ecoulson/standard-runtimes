import { Runtime } from '../../../models/runtimes/runtime';
import { IRuntimeService } from './runtime-service.interface';
import { RuntimeServiceOperations } from './runtime-service.operations';

export class RuntimeService
    extends RuntimeServiceOperations
    implements IRuntimeService
{
    createRuntime<T>(runtime: Runtime<T>): Runtime<T> {
        runtime.id = this.idBroker.generateId();
        return this.runtimeBroker.storeRuntime(runtime);
    }

    executeRuntime<T>(runtime: Runtime<T>): T {
        throw new Error('Method not implemented.');
    }
}
