import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() { 
        return (
            <header>
                <h1 className='header__websiteTitle'>Website Title</h1>
                <ul className='nav'>
                    <li className='header__home navlink'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='header__profile navlink'>
                        <Link to='/profile'>
                            Profile
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}
 
export default Header;