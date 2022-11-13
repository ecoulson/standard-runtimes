import { Executable } from '../../models/executable/executable';
import { RuntimeChain } from '../../models/runtime-chains/runtime-chain';

export interface IServiceRuntimeClient {
    createRuntime<T>(executable: Executable<T>): RuntimeChain<T>;

    createAsyncRuntime<T>(
        executable: Executable<Promise<T>>
    ): RuntimeChain<Promise<T>>;
}
