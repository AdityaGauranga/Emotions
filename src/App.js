import React, { useState } from "react";
import "/.styles.css";

var emojiDictionary = {
    "😅": "Sweat smile",
    "😋": "Slurp",
    "😑": "Poker face",
    "😦": "Frowning",
    "👹": "Ogre",
    "👀": "Watching eyes",
    "😘": "Flying kiss",
    "😴": "Sleep",
    "🤑": "Dolla face",
    "🤫": "Shush",
    "🐲": "Dragon"
  };

  export default function App() {

    function emojiInputHandler(event) { // processing part
        var userInput = event.target.value;

        var meaning = emojiDictionary[userInput]; // this is taking the values out of the dictionary
    }
    return (
        <div className="App">
          <h1>Emoji Interpreter</h1>
          <input onChange={emojiInputHandler}></input>
        </div>
    
    )}
