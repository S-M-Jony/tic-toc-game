import React from "react";
import './App.css';

import Game from "./components/game";

const App = () =>{
    return(
        <div className="app">
            <h1>Tic Toe Game</h1>
            <Game></Game>
        </div>
    );
};

export default App;