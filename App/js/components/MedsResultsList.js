import React from 'react';
import PropTypes from 'prop-types';
import MedResultsRow from './MedsResultsRow';

const MedsResultsList = ({ meds }) => {
    const medRows = meds.map(med => <MedResultsRow
        key={med._id}
        name={med.name}
        description={med.description}
        expirationDate={med.expidationDate}
    />);

    return (<div>
        <ul>
            {medRows}
        </ul>
    </div>);
};

MedsResultsList.propTypes = {
    meds: PropTypes.array.isRequired
};

export default MedsResultsList;
