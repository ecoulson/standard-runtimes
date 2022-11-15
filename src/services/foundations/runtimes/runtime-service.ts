import { isNil } from '@the-standard/conditions';
import { Exception } from '@the-standard/exceptions';
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
            const logic = () => runtime.logic!();
            if (!isNil(runtime.exceptionHandler)) {
                return runtime.exceptionHandler(logic);
            }
            return logic();
        });
    }

    async executeAsyncRuntime(runtime: Runtime<Promise<T>>): Promise<T> {
        return this.executeAsyncRuntimeExceptionHandler(() => {
            this.validateRuntime(runtime);
            const logic = () => runtime.logic!();
            if (!isNil(runtime.exceptionHandler)) {
                return runtime.exceptionHandler(logic);
            }
            return logic();
        });
    }
}
