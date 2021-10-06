import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const AlertCard = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert key={alert.id} variant={alert.alertType} className="alert">
        {alert.msg}
      </Alert>
    ))
  );
};

//PropType Declaration
AlertCard.propTypes = {
  alerts: PropTypes.array.isRequired,
};

// Getting state from combined Reducer
const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
});

export default connect(mapStateToProps)(AlertCard);
