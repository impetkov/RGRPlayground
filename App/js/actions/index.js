import MEDS_RECEIVED from './types';
import AppDispatcher from './dispatchers';

const ServerActions = {
    dispatchMedsReceived(meds) {
        AppDispatcher.dispatch({
            actionType: MEDS_RECEIVED,
            meds
        });
    }
};

export default ServerActions;