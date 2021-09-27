import React from 'react';
        
import PropTypes from 'prop-types';

import './label.css';

const Label = ({ label }) => {
  return (
    <div className="label">
      <h1>{label}</h1>
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string
}

export default Label;