import React from "react";

const LoadingSpinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui large text loader">{props.text}</div>
        </div>
    )
};

export default LoadingSpinner;
