import React from 'react';
import './App.css';
import {Test} from "./components/Test/Test";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainContent} from "./components/MainContent/MainContent";

function App() {


    return (
        <>
            <div className="App bg-cyan-400">
                <div className="mx-[50px] bg-white">
                    <Header/>
                    <MainContent/>
                    {/*<Test/>*/}
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default App;
