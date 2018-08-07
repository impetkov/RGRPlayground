import React from 'react';
import PropTypes from 'prop-types';

const MedsResultsRow = ({ name, description, expirationDate }) => <li>
    <div>
        {name}
        <br/>
        {description}
        <br/>
        {expirationDate}
    </div>
</li>;

MedsResultsRow.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    expirationDate: PropTypes.string
};

export default MedsResultsRow;
