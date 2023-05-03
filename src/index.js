//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

var hour = new Date().getHours();

var word = "Morning";
var textColor = {
  color: "red"
};

//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
if (hour <= 12) {
  word = "Morning";
  textColor.color = "red";
} else if (hour < 18) {
  word = "Afternoon";
  textColor.color = "green";
} else {
  word = "Nigth";
  textColor.color = "blue";
}

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
ReactDOM.render(
  <h1 className="heading" style={textColor}>
    Good {word}
  </h1>,
  document.getElementById("root")
);

//Apply the "heading" style in the styles.css
