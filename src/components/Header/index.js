import React from 'react';
import './style.css';

class Header extends React.Component {
    render() { 
        return (
            <header>
                <h1 className='header__websiteTitle'>Website Title</h1>
                <ul className='nav'>
                    <li className='header__home navlink'><a href='#'>Home</a></li>
                    <li className='header__profile navlink'><a href='#'>Login</a></li>
                </ul>
            </header>
        );
    }
}
 
export default Header;