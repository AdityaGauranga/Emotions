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

  var emojisWeknow = Object.keys(emojiDictionary); // conversion of objects into array

  export default function App() {

    function emojiInputHandler(event) { // processing part
        var userInput = event.target.value;

        var meaning = emojiDictionary[userInput]; // this is taking the values out of the dictionary
    }
    return (
        <div className="App">
          <h1>Emoji Interpreter</h1>
          <input onChange={emojiInputHandler}></input>

          <h2> {meaning} </h2>
          {/* Actual output set by React using useState*/}

          <h3> More emojis here </h3> {
              emojisWeknow.map(function (emoji) {
                  return (
                      <span style = {{FontSize: "2rem", padding: "0.5rem", cursor: "pointer"}}, key = {emoji}> {emoji} </span>
                  )
                  
              })
          }
        </div>
    
    )}
