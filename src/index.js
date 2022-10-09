import React from "react";
import ReactDOM from "react-dom/client"
import LoadingSpinner from "./LoadingSpinner";
import SeasonDisplay from "./SeasonDisplay";
import ErrorDisplay from "./ErrorDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    renderContent() {
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        } else if (this.state.errorMessage) {
            return <ErrorDisplay errorText={this.state.errorMessage} />
        }

        return <LoadingSpinner text="Please allow access to location data" />
    };

    render() {
        return this.renderContent();
    }
}

root.render(<App />);
