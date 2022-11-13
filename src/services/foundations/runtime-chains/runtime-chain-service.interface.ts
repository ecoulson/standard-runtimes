import { Executable } from '../../../models/executable/executable';
import { RuntimeChain } from '../../../models/runtime-chains/runtime-chain';

export interface IRuntimeChainService {
    createRuntimeChain<T>(executable: Executable<T>): RuntimeChain<T>;

    createAsyncRuntimeChain<T>(
        executable: Executable<Promise<T>>
    ): RuntimeChain<Promise<T>>;
}
