import React from 'react';
import Navbar from './Navbar';
import '../styles/styles.scss';


export default function Header(){
    return(
        <header className='header container'>
            <div className="logo">
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/d4/3f/b0/d43fb0f3-b752-f33f-f05b-ec0ed5f83787/AppIcons-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp" alt="Logo" />
            </div>
            <Navbar />
        </header>
    )
}