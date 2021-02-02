import React from 'react';
import image from '../assets/Img/yvonne.jpg';
import "../Stylesheets/yvonne.css";

class Yvonne extends React.Component {
    render () {
        return (
            <div>
                <center></center>
                <center>You are my sunshine</center>
                <center>You are the apple of my eye!</center>
                <img className="image" src={image} />
            </div>
        );
    }
}

export default Yvonne;