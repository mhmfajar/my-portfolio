import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="cross">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
                <div className="contents">
                    <h1>COMING SOON</h1>
                    <div className="progress">
                        <div className="loading"></div>
                    </div>
                    <h4>30%</h4>
                    <h5>Website Under Cronstruction, On Progress</h5>
                    <a href="#download">
                        <span>Portfolio.pdf</span>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default App;
