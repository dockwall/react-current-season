import React from "react";

const LoadingSpinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui large text loader">{props.text}</div>
        </div>
    )
};

LoadingSpinner.defaultProps = {
    text: 'Loading...'
};

export default LoadingSpinner;
