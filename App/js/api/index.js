import { post } from 'jquery';
import ServerActions from '../actions';

const onMedsRetrieved = (response) => {
    ServerActions.dispatchMedsReceived(response);
};

const getMeds = () => {
    post('/graphql', {
        query: `{
            meds {
            name
            description
            expidationDate
          }
        }`
    }).done(response => onMedsRetrieved(response.data.meds));
};

export default getMeds;
