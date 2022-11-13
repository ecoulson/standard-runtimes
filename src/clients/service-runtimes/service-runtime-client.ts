import { Executable } from '../../models/executable/executable';
import { RuntimeChain } from '../../models/runtime-chains/runtime-chain';
import { RuntimeChainService } from '../../services/foundations/runtime-chains/runtime-chain-service';
import { IServiceRuntimeClient } from './service-runtime-client.interface';

export class ServiceRuntimeClient implements IServiceRuntimeClient {
    private readonly runtimeChainService: RuntimeChainService;

    constructor() {
        this.runtimeChainService = new RuntimeChainService();
    }

    createRuntime<T>(executable: Executable<T>): RuntimeChain<T> {
        return this.runtimeChainService.createRuntimeChain(executable);
    }

    createAsyncRuntime<T>(
        executable: Executable<Promise<T>>
    ): RuntimeChain<Promise<T>> {
        return this.runtimeChainService.createAsyncRuntimeChain(executable);
    }
}
