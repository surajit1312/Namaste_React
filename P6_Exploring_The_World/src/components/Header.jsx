import { useState } from 'react';

const Header = () => {
    const [loginLabel, setLoginLabel] = useState('Login');
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className='login-btn' onClick={() => {
                        loginLabel === 'Login' ? setLoginLabel('Logout') : setLoginLabel('Login');
                    }}>{loginLabel}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
