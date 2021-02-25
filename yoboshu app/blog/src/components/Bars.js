import React, { Component } from 'react';
import "./Bar.css";

export class Bars extends Component {
    render() {
        return (
            <div className="full">
            <div class="grid-container">
            <div class="grid-item">
                <img className="boy" src="images\boy1.gif"></img>
            </div>
            <div class="grid-item">
                <h6 className="name">Whenever my body shouts<br/> STOP<br/>my mind screams <br/>NEVER!</h6>
                
            </div>
           
            
            </div>
            <div class="grid-container">
            
            <div class="grid-item">
                <h6 className="name1">It hurts now<br/> But one day<br/> It will be your warm-up..</h6>
                
            </div>
            <div class="grid-item">
                <img className="boy1" src="images\boy.gif"></img>
            </div>
           
            
            </div>
            <div class="grid-container">
            
        
            <div class="grid-item">
                <img className="boy1" src="images\boy2.gif"></img>
            </div>
            <div class="grid-item">
                <img className="boy1" src="images\boy6.gif"></img>
            </div>
            <div class="grid-item">
                <img className="boy1" src="images\boy4.gif"></img>
            </div>
            
            </div>
            
            
            </div>
        )
    }
}

export default Bars
