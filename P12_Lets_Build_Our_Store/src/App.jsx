import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Home from './components/Home';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './contexts/UserContext';
import appStore from './store/app-store';
import Cart from './components/Cart';

const AppLayout = () => {
    const [userName, setUserName] = useState();

    // user authentication code
    useEffect(() => {
        // make API call
        const data = {
            name: 'Surajit Rana'
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className='app'>
                <UserContext.Provider value={{ loggedInUser: `Developer: ${userName}` }}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

/**
 * The below lines are used for Lazy Loading of the components
 * 
 * Alternative names of Lazy Loading are:
 * 
 * 0. Lazy Loading via Routes
 * 1. Chunking - creating small bundles instead of a single large size bundles
 * 2. Code Splitting
 * 3. Dynamic Bundling
 * 4. On Demand Loading
 * 5. Dynamic Imports
 */
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h2>Loading...</h2>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Suspense fallback={<h2>Loading...</h2>}><Contact /></Suspense>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={appStore}>
            <RouterProvider router={appRouter} />
        </Provider>
    </React.StrictMode>
);
