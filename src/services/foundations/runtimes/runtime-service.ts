import { Runtime } from '../../../models/runtimes/runtime';
import { IRuntimeService } from './runtime-service.interface';
import { RuntimeServiceOperations } from './runtime-service.operations';

export class RuntimeService<T>
    extends RuntimeServiceOperations<T>
    implements IRuntimeService<T>
{
    executeRuntime(runtime: Runtime<T>): T {
        return this.executeRuntimeExceptionHandler(() => {
            this.validateRuntime(runtime);
            return runtime.exceptionHandler!(() => runtime.logic!());
        });
    }
}
