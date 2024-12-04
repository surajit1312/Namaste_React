import { useEffect, useState } from 'react';

// using props in Functional components
const Developer = (props) => {
    // using state variables in Functional components
    // const [dataFetched, setDataFetched] = useState(false);
    const [developers, setDevelopers] = useState([]);
    const [count, setCount] = useState(0);

    // using useEffect to call API
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Timer started at useEffect');
        }, 1000);
        getUsers();
        return () => {
            // returns a callback to clean up
            clearInterval(timer);
            console.log('Timer closed at useEffect cleanup callback!!!');
        }
    }, []);

    // using useEffect to call API
    useEffect(() => {
        console.log('Called from useEffect as count changed to', count);
    }, [count]);

    const getUsers = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const developers = await data.json();
        setDevelopers(developers);
    };

    // using props in Functional components
    // const { name, location, contact } = props;

    if (!developers || developers.length === 0) {
        return (
            <div className='user-card'>
                <h2>Name:</h2>
                <h3>Location:</h3>
                <h4>Contact:</h4>
            </div>
        );
    }
    return (
        <div className='user-card-list'>
            <h5>Rating: {count}</h5>
            <button onClick={() => {
                setCount(count + 1);
            }}>Update Rating</button>
            {
                developers.map((developer) => {
                    const { id, name, address, email } = developer;
                    return (
                        <div className='user-card' key={id}>
                            <h2>Name:{name}</h2>
                            <h3>Location: {address?.street}, {address?.city}, {address?.zipcode}</h3>
                            <h4>Contact: {email}</h4>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Developer;
