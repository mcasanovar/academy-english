import React from "react";
import PropTypes from "prop-types";

export default function CardLevel({ title, description }) {
  return (
    <div className="container-card-level">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

CardLevel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

CardLevel.defaultProps = {
  description: "Sin descripción",
};
