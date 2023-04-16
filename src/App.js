import React from "react";
import "./App.css";
import Search from "./Search";

const API_KEY = "53260078"


const App = () => {

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <Search API_KEY={API_KEY} />
        </div>
    );
}

export default App;