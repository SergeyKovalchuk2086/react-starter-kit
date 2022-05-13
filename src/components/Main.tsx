import {useNavigate} from "react-router-dom";
import React from 'react';
import Header from "./Header";

function Main() {
    const navigate = useNavigate()

    function toAuth() {
        navigate('/')
    }

    return (
        <div className="container">
            <Header />
            <button onClick={toAuth}>To auth</button>
        </div>
    );
}

export default Main;
