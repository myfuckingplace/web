import React from 'react';
import './App.css';
import {Logo} from "./components/Logo";
import {Contacts} from "./components/contacts/Contacts";

function App() {

    return (
        <div className="App">
            <div className="header">
                <Logo/>
                <Contacts/>
            </div>
        </div>
    );
}

export default App;
