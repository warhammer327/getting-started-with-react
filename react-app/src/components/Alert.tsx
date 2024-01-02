import React from "react";

interface Props{
    onClose: ()=> void
}
const Alert = ({onClose}: Props) => {
    return (
        <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
        >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={onClose}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Alert;
