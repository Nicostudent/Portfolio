import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import abrir from './img/hamburguesa.jpg'
import close from './img/x.jpg'

import './styles.css'
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 800) {
            setOpen(true);
        }else {
            setOpen(false)
        }
    };

    const handleClose = () => {
        if(screenWidth < 800){
            setOpen(false);
        }
    }

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);

    }, []);

    return (
        <nav className="navbar">
            <div className="nav-w">
                <div className="logo">

                </div>
                <div className="list-wrap">
                    <img src={abrir} alt='abrir menu'
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open)
                        }}
                    />
                    <img src={close} alt='cerrar menu'
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open)
                        }}
                    />
                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <Link onClick={handleClose} to='/'>Home</Link>

                        </li>
                        <li>
                            <Link onClick={handleClose} to='/about'>About</Link>

                        </li>
                        <li>
                            <Link onClick={handleClose} to='/skills'>Skills</Link>

                        </li>
                      
                        <li>
                            <Link onClick={handleClose} to='/Projects'>Projects</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
