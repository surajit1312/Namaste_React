import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginLabel, setLoginLabel] = useState('Login');
    console.log('Header rendered!');

    /**
     * In use Effect [] is the dependency array 'dep' and useEffect behaves differently for it
     * Dependency array 'dep' is optional
     * 
     * if dep is not passed, it will be called everytime the current component is rendered
     * if dep = [], then it will be called only 1 time during it is rendered
     * if dep = [var] where var is any state variable then useEffect will be called whenever
     * state variable [var] changes
     *   
     */
    useEffect(() => {
        console.log('UseEffect called');
    }, [loginLabel]);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
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
