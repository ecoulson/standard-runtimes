import { v4 } from 'uuid';
import { IIdBroker } from './id-broker.interface';

export class IdBroker implements IIdBroker {
    generateId(): string {
        return v4();
    }
}
