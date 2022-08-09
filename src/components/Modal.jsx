import React from "react";
import PropTypes from "prop-types";

export default function Modal({
  title,
  children,
  showClose,
  showAccept,
  textAcceptButton,
}) {
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                {title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {children}
            </div>
            <div class="modal-footer">
              {showClose && (
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              )}
              {showAccept && (
                <button type="button" class="btn btn-primary">
                  {textAcceptButton}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  showClose: PropTypes.bool,
  showAccept: PropTypes.bool,
  textAcceptButton: PropTypes.string,
};

Modal.defaultProps = {
  showClose: false,
  showAccept: true,
  textAcceptButton: "Aceptar",
};
