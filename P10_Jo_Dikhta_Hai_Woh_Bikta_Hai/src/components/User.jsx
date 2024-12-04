import { useState } from 'react';

// using props in Functional components
const User = (props) => {
    // using state variables in Functional components
    let [count, setCount] = useState(0);
    // using props in Functional components
    const { name, location, contact } = props;

    return (
        <div className='user-card'>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <h5>Rating: {count}</h5>
            <button className='rating-btn' onClick={() => {
                if (count <= 9) {
                    setCount(++count);
                }
            }}>Increase Rating</button>
            <button className='rating-btn' onClick={() => {
                if (count > 0) {
                    setCount(--count);
                }
            }}>Decrease Rating</button>
        </div>
    );
};

export default User;
