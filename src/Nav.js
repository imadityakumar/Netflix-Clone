import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src='data:image/png;base64,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'
                alt='Netflix Logo'
            />

            <img
                className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='Netflix Logo'
            />
        </div>
    )
}

export default Nav

