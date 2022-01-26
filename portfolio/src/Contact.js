import React from 'react'
import './styles.css';

const Contact = () => {
    return (
        <div className='contacto'>
            <h1>Contact me!</h1>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.166037651373!2d-65.2288952491129!3d-26.834670796334855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c65635702db%3A0x65c11ad30c6c5855!2sLavalle%20%26%20Fr%C3%ADas%20Silva%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1643162146003!5m2!1ses-419!2sar"
              frameBorder='0'
              allowfullscreen=""
              tabIndex='0'
              aria-hidden='false' 
              loading="lazy" 
              title='Home'></iframe>
            <h4>Phone</h4>
            <p>0381 6 171727</p>
            <h4>Email</h4>
            <p>rojo.nico@hotmail.com</p>
            <h4>Address</h4>
            <p>San Miguel de Tucuman, Tucuman, Argentina</p>
        </div>
    )
}

export default Contact;
