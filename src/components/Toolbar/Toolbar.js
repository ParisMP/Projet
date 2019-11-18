import React from 'react';
import './Toolbar.css';
import BurgerButton from '../SideButton/BurgerButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div>
                <BurgerButton click={props.clickedOnDropDown}/>
            </div>
            <div className="toolbar_logo"><a href="/">DASHBOARD</a></div>
            <div className="toolbar_logo_space"></div>
            <div className="toolbar_widget_list">
                <ul>
                    <li><a href="/">widget 1</a></li>
                    <li><a href="/">widget 2</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;