import React from "react";
import "./SeasonDisplay.css"

// There are only two seasons - Summer and Winter
// Months between 3 and 8 - Summer for northern Hemisphere, Winter for southern
// Other months - Winter for northern Hemisphere, Summer for southern
// Hemisphere determines by Geolocation API (calls in index.js)
// Geolocation API returns a coords object - latitude passed as props 

const seasonConfig = {
    winter: {
        seasonText: "Burr, it's chilly!",
        seasonIconName: "massive snowflake icon",
    },
    summer: {
        seasonText: "Let's hit the beach!",
        seasonIconName: "massive sun icon",
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return (lat > 0) ? 'summer' : 'winter';
    } else {
        return (lat > 0) ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const currentMonth = new Date().getMonth();
    const currentSeason = getSeason(props.lat, currentMonth);

    const { seasonText, seasonIconName } = seasonConfig[currentSeason];

    return (
        <div className={`season-display ${currentSeason}`}>
            <i className={`icon-left ${seasonIconName}`} />
            <h1>{seasonText}</h1>
            <i className={`icon-right ${seasonIconName}`} />
        </div>
    );
};

export default SeasonDisplay;
