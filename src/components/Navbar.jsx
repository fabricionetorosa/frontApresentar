import React from 'react';
import '../styles/styles.scss'


export default function Navbar(){
    return(
        <nav className="navbar">
          <li><a href="../App.jsx">Professores</a></li>
          <li><a href="">Alunos</a></li>
          <li><a href="">Ensalar</a></li>
        </nav>
    )
}