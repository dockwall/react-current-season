import React from "react";
import ReactDOM from "react-dom/client"
import SeasonDisplay from "./SeasonDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        error => console.log(error)
    );
    return <div>Hi there!</div>;
};

root.render(<App />);
