import React from "react";
import "./ErrorDisplay.css";

const ErrorDisplay = (props) => {
    return (
        <div className='error-display'>
            <h1>Error: {props.errorText}</h1>
        </div>
    )
};

export default ErrorDisplay