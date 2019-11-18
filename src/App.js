import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import BurgerDropDown from "./components/SideButton/BurgerDropDown";
import DropDown from './components/DropDown/DropDown';

class App extends Component {
    //set up the state
    state = {
        dropDownClicked: false
    };
    //dropDownClicked allows wether dropDown and burgerDropDown are shown


    //method clickDropDown
    clickDropDown = () => {
        this.setState((prevState) => {
            return {dropDownClicked: !prevState.dropDownClicked};
        });
    };

    //method to handle close
    //don't care about previous state statement as it was already handled
    dropDownCloseManager = () => {
        this.setState({dropDownClicked: false});
    };

    render()
    {
        //let adds adds a variable
        let dropDown;
        let burgerDropDown;

        //if burger is clicked
        //passing the click prop to DropDown component
        if (this.state.dropDownClicked){
            burgerDropDown = <BurgerDropDown/>;
            dropDown = <DropDown click={this.dropDownCloseManager}/>;
        }
        // {} will allow to reference the variables if dropdown button is clicked
        // don't put () next to clickDropDown or the method would be automatically executed
        //instead we pass a reference, we pass the address to that method
        return (
            <div className="divh">
                <Toolbar clickedOnDropDown={this.clickDropDown}/>
                {burgerDropDown}
                {dropDown}
                <DropDown/>
                <div className="title">
                    <a>DASHBOARD</a>
                </div>
            </div>
        );
    }
}

export default App;
