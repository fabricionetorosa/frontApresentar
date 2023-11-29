import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/header'
import About from '../components/About'
import Alunos from '../components/Alunos'
import Galery from '../components/Professores'
import '../styles/styles.scss'
import Professores from '../components/Professores'
//import { Link } from 'react-router-dom'

function Home(){
    return(
        <main>
            <Header />
            <Banner />
            <div className="section" id="sobre">
                <About />
            </div>
            <div className="section" id="galeria">
                <Professores/>
                 
                <Alunos/>
                
            </div>
            <Footer />
        </main>
    )
}

export default Home