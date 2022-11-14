import { isNil } from '@the-standard/conditions';
import {
    validate,
    ValidationRule,
    ValidationStep,
} from '@the-standard/validations';
import { IllegalRuntimeException } from '../../../models/runtimes/exceptions/illegal-runtime-exception';
import { NullRuntimeException } from '../../../models/runtimes/exceptions/null-runtime-exception';
import { Runtime } from '../../../models/runtimes/runtime';

export class RuntimeServiceValidations<T> {
    protected validateRuntime(runtime: Runtime<T>) {
        if (isNil(runtime)) {
            throw new NullRuntimeException();
        }
        validate(new IllegalRuntimeException(), [
            this.createLogicValidationStep(runtime),
        ]);
    }

    private createLogicValidationStep(runtime: Runtime<T>) {
        return new ValidationStep(
            'logic',
            new ValidationRule(isNil(runtime.logic), 'Logic can not be null.')
        );
    }
}
