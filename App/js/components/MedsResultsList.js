import React from 'react';
import PropTypes from 'prop-types';
import MedResultsRow from './MedsResultsRow';

const MedsResultsList = ({ meds, limit }) => {
    const medRows = meds.slice(0, limit).map(med => <MedResultsRow
        key={med.name}
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
    meds: PropTypes.array.isRequired,
    limit: PropTypes.number
};

export default MedsResultsList;
