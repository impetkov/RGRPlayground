import React from 'react';
import MedsResultsHeader from './MedsResultsHeader';
import MedsResultsList from './MedsResultsList';
import getMeds from '../api';
import MedsStore from '../stores';

const getAppState = () => ({ meds: MedsStore.getAllMeds() });

class MedsResultsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = getAppState();
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState(getAppState());
    }

    componentDidMount() {
        getMeds();
        MedsStore.on('change', this.onChange);
    }

    componentWillUnmount() {
        MedsStore.removeListener('change', this.onChange);
    }

    render() {
        return (<div>
            <MedsResultsHeader />
            <MedsResultsList meds={this.state.meds}/>
        </div>);
    }
}

export default MedsResultsContainer;
