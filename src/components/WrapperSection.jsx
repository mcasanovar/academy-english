import React from "react";
import PropTypes from "prop-types";

export default function WrapperSection({ children, title }) {
  return (
    <div className="container-wrapper">
      <div className="container-title">
        <h4>{title}</h4>
      </div>
      <div className="container-body">{children}</div>
    </div>
  );
}

WrapperSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

WrapperSection.defaultProps = {
  title: "",
};
