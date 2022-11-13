import { RuntimeChain } from '../runtime-chains/runtime-chain';
import { ExceptionHandlerExecutor } from './exception-handler-executor';

export type ExceptionHandler<T> = (
    executable: ExceptionHandlerExecutor<T>
) => RuntimeChain<T>;
