import { Executable } from '../../../models/executable/executable';
import { ServiceRuntimeChain } from '../../../models/service-runtime-chains/service-runtime-chain';

export interface IRuntimeChainService {
    createRuntimeChain<T>(executable: Executable<T>): ServiceRuntimeChain<T>;

    createAsyncRuntimeChain<T>(
        executable: Executable<Promise<T>>
    ): ServiceRuntimeChain<Promise<T>>;
}
