import React from "react";
import './Spinner.css';

const Spinner = () => {
    return(
        <div className="spinner-box">
            <div className="spinner"></div>
            <p className="spinner-text">Loading...</p>
        </div>
    )
};

export default Spinner;