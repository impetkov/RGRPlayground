import { EventEmitter } from 'events';
import AppDispatcher from '../actions/dispatchers';
import MEDS_RECEIVED from '../actions/types';

let meds = [];

class MedsStore extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register((action) => {
            switch (action.actionType) {
            case MEDS_RECEIVED:
                meds = action.meds;
                this.emit('change');
                break;
            default:
                break;
            }
        });
    }

    getAllMeds() {
        return meds;
    }
}

export default new MedsStore();