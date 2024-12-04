import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

const Header = () => {
    const [loginLabel, setLoginLabel] = useState('Login');
    // console.log('Header rendered!');

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
        // console.log('UseEffect called');
    }, [loginLabel]);

    const onlineStatus = useOnlineStatus();

    return (
        <div className='flex place-content-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50 xl:bg-purple-200'>
            <div className='flex'>
                <h1 className='flex items-center mx-8 font-extrabold text-6xl'>Foodie</h1>
                {/* <img className='logo' /> */}
            </div>
            <div className='flex items-center'>
                <ul className='flex justify-around p-4 m-4'>
                    <li className='px-4'>
                        Online Status: {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li className='px-4'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='px-4'>Cart</li>
                    <li className='px-4'>
                        <button className='login-btn' onClick={() => {
                            loginLabel === 'Login' ? setLoginLabel('Logout') : setLoginLabel('Login');
                        }}>{loginLabel}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
