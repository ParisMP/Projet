import React from 'react';

import './BurgerButton.css';

const BurgerButton = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button_l"/>
        <div className="toggle_button_l"/>
        <div className="toggle_button_l"/>




    </button>
);
// if button is clicked it will execute the method recieved on props
// props holds the reference of the method assigned to click found in Toolbar
export default BurgerButton;