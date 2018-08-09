import React from 'react';
import { graphql } from 'react-relay';
import MedsResultsHeader from './MedsResultsHeader';
import MedsResultsList from './MedsResultsList';
import getMeds from '../api';
import MedsStore from '../stores';

const getAppState = () => ({ meds: MedsStore.getAllMeds() });

class MedsResultsContainer extends React.Component {
    state = getAppState();

    onChange = () => {
        this.setState(getAppState());
    }

    componentDidMount() {
        getMeds();
        //     console.log(graphql`
        // query MedsResultsContainerMedsQuery {
        //     meds {
        //       name          
        //     }
        //   }`);
        MedsStore.on('change', this.onChange);
    }

    componentWillUnmount() {
        MedsStore.removeListener('change', this.onChange);
    }

    render() {
        return (<div>
            <MedsResultsHeader />
            <MedsResultsList meds={this.state.meds} limit={2} />
        </div>);
    }
}

export default MedsResultsContainer;
