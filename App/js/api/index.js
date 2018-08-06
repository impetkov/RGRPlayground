import { get } from 'jquery';
import ServerActions from '../actions';

const onMedsRetrieved = (response) => {
    ServerActions.dispatchMedsReceived(response);
};

const getMeds = () => {
    get('/data/meds').done(response => onMedsRetrieved(response));
};

export default getMeds;
