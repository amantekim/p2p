import React from "react";
import PropTypes from 'prop-types'

const RouteDetails = ({ total_distance, total_time }) => {
  return (
    <div className="form-group">
      <div className="info">
        <p>Total Distance</p>
        <p className="result">{total_distance}</p>
      </div>
      <div className="info">
        <p>Total Time</p>
        <p className="result">{total_time}</p>
      </div>
    </div>
  );
};

RouteDetails.defaultProps = {
  total_distance: "",
  total_time: "",
}

RouteDetails.propTypes = {
  total_distance: PropTypes.string,
  total_time: PropTypes.string,
}

export default RouteDetails;
