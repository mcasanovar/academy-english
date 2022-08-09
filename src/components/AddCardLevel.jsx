import React from "react";
import PropTypes from "prop-types";

export default function AddCardLevel({ onClick }) {
  return (
    <button
      type="button"
      className="container-add-card-level"
      data-bs-target="#staticBackdrop"
      data-bs-toggle="modal"
    >
      +
    </button>
  );
}

AddCardLevel.propTypes = {
  onClick: PropTypes.func,
};
