import React from 'react';
import './App.css';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {RoutesPage} from "./routes/Routes";

function App() {
    return (
        <div className='App'>
            <Header/>
            <RoutesPage/>
            <Footer/>
        </div>
    );
}

export default App;
