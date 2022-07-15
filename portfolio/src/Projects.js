import React from 'react'
import './styles.css';
import mypc from './img/mypc.png'
import videogames from './img/videogames.png'



const Projects = () => {
    return (
        <div className='projects'>
                <h1>Projects</h1>
            <div className='fleximg'>
                <a href='https://Mypc.vercel.app' target="_blank" >
                <img src={mypc}  style={{
                    width:'300px',
                }} alt='mypc page'/>
                </a>               
                <p> Marketplace based on computer components to buy and sell.
                    final project of the bootcamp of <a href='soyhenry.com' target="_blank">soyhenry.com</a>,
                     is a group project which we carried out to graduate.
                      We use "react, redux, typescript,
                     firebase,postgresql,express,node,css,material ui...</p>
            </div>
            <div className='fleximg'>
                <a href='https://videogames-nu.vercel.app/' target="_blank" >
                <img src={videogames}  style={{
                    width:'300px',
                }} alt='mypc page' />
                </a>                                 
                <p>  individual project to move to the last stage of the project,
                     we had 3 weeks to do it. 
                    Tools: "react, redux, node, express,postgresql, vanila css... </p>
            </div>
                
        </div>
    )
}

export default Projects;
