import React from 'react';
import PropTypes from 'prop-types';

const MedsResultsRow = ({ medName }) => <li>{medName}</li>;

MedsResultsRow.propTypes = {
    medName: PropTypes.string
};

export default MedsResultsRow;
