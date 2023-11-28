import React from 'react';
import TextBig from './TextBig';
// import Button from './Button';
import '../styles/styles.scss';


export default function Banner(){
    return(
        <div className='banner container'>
            <div className="two-column content">
                <div className="inner-content">
                    <h1>Bem Vindo!</h1>
                    <h1>API para ensalamento SENAI</h1>
                    
                </div>
            </div>
            <div className="two-column content">
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/d4/3f/b0/d43fb0f3-b752-f33f-f05b-ec0ed5f83787/AppIcons-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp" alt="Cachorro" />
            </div>
        </div>
    )
}