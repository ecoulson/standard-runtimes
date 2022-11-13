import { ExceptionHandlerExecutor } from '../../../models/exception-handlers/exception-handler-executor';
import { Executable } from '../../../models/executable/executable';
import { ServiceRuntimeChain } from '../../../models/service-runtime-chains/service-runtime-chain';
import { RuntimeChainServiceExceptions } from './runtime-chain-service.exceptions';
import { IRuntimeChainService } from './runtime-chain-service.interface';
import { RuntimeChainServiceValidations } from './runtime-chain-service.validations';

export class RuntimeChainService implements IRuntimeChainService {
    private readonly validations: RuntimeChainServiceValidations;
    private readonly exceptions: RuntimeChainServiceExceptions;

    constructor() {
        this.validations = new RuntimeChainServiceValidations();
        this.exceptions = new RuntimeChainServiceExceptions();
    }

    createRuntimeChain<T>(executable: Executable<T>): ServiceRuntimeChain<T> {
        return this.exceptions.createRuntimeChainHandler(() => {
            this.validations.validateExecutable(executable);
            return this.instantiateRuntimeChain(executable);
        });
    }

    private instantiateRuntimeChain<T>(executable: Executable<T>) {
        return new ServiceRuntimeChain<T>(
            () => this.execute(executable),
            (exceptionHandler) =>
                this.exceptionHandler(exceptionHandler, executable)
        );
    }

    private execute<T>(executable: Executable<T>): T {
        return executable();
    }

    private exceptionHandler<T>(
        executor: ExceptionHandlerExecutor<T>,
        executable: Executable<T>
    ): ServiceRuntimeChain<T> {
        return this.exceptions.createRuntimeChainHandler(() => {
            this.validations.validateExceptionHandlerExecutor(executor);
            return this.instantiateRuntimeChain(() => executor(executable));
        });
    }

    createAsyncRuntimeChain<T>(
        executable: Executable<Promise<T>>
    ): ServiceRuntimeChain<Promise<T>> {
        return this.exceptions.createRuntimeChainHandler(() => {
            this.validations.validateExecutable(executable);
            return this.instantiateAsyncRuntimeChain(executable);
        });
    }

    private instantiateAsyncRuntimeChain<T>(
        executable: Executable<Promise<T>>
    ) {
        return new ServiceRuntimeChain<Promise<T>>(
            () => this.executeAsync(executable),
            (exceptionHandler) =>
                this.exceptionHandlerAsync(exceptionHandler, executable)
        );
    }

    private async executeAsync<T>(
        executable: Executable<Promise<T>>
    ): Promise<T> {
        return await executable();
    }

    private exceptionHandlerAsync<T>(
        executor: ExceptionHandlerExecutor<Promise<T>>,
        executable: Executable<Promise<T>>
    ): ServiceRuntimeChain<Promise<T>> {
        return this.exceptions.createRuntimeChainHandler(() => {
            this.validations.validateExceptionHandlerExecutor(executor);
            return this.instantiateRuntimeChain(() => executor(executable));
        });
    }
}
