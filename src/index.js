import React from "react";
import ReactDOM from "react-dom/client"
import SeasonDisplay from "./SeasonDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {

    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            error => console.log(error)
        );

        return <div>Latitude: </div>
    }
}

root.render(<App />);
