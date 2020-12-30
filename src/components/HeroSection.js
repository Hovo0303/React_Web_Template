import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection (){
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStytle='btn--outline' buttonSize='btn--large'>Get started</Button>
                <Button className='btns' buttonStytle='btn--primary' buttonSize='btn--large'>Whatch Style <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}
export default HeroSection