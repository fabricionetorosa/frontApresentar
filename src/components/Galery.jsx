import React from 'react';
import ItemImg from './ItemImg';
import TextBig from './TextBig';
import '../styles/styles.scss';


export default function Galery(){
    return(
        <div className="one-column content">
            <TextBig label="Ensalar" />
            {/* <div className="inner-container">
                <ItemImg src="https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg" label="Bob"/>
                <ItemImg src="https://www.rbsdirect.com.br/filestore/8/6/7/2/8/7/4_606e6d7e56dc7ba/4782768_1cdc28f74bff261.jpg?version=1575255600" label="Mia"/>
                <ItemImg src="https://cdn.awsli.com.br/31/31979/produto/32363745/774da1dfb9.jpg" label="Tobi"/>
                <ItemImg src="https://www.rbsdirect.com.br/filestore/8/6/7/2/8/7/4_606e6d7e56dc7ba/4782768_1cdc28f74bff261.jpg?version=1575255600" label="Zoe"/>
               
            </div> */}
        </div>
    )
}