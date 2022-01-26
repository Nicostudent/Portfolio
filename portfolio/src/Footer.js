import React from 'react'
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import './styles.css';


const Footer = () => {
    return (
       <footer className='footer'>
           <a href='https://www.facebook.com/necolas' target="_blank" rel='noreferrer'>            
            <AiOutlineFacebook className='icon'/>
           </a>
           <a href='https://www.instagram.com/nico.rojo_/' target="_blank" rel='noreferrer'>            
            <AiFillInstagram className='icon' />
           </a>
           <a href='https://www.linkedin.com/in/nicol%C3%A1s-rojo/' target="_blank" rel='noreferrer'>            
           <AiFillLinkedin className='icon'/>
           </a>
       </footer>
    )
}

export default Footer;