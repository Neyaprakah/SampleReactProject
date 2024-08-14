import React,{Component} from "react";
import './style.css';
import logo from './images/logo192.png';

class Header extends React.Component{
    render(){
        return (
        <header className="header">
            <div className="top">
                <img src={logo} id="logo"></img>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </header>
        );
    }
}

export default Header;
