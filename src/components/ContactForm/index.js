import React from "react";
import ReactContactForm from 'react-mail-form';
import "./style.css"

function Containers() {
    return <ReactContactForm to="shash833@gmail.com" titlePlaceholder="Subject" contentsPlaceholder="Enter your message" className="form"></ReactContactForm>;
}

export default Containers;
