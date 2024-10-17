import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';


const Body = () => {
    /**
     * super powered local state variable
     * Note: When state variable changes, React re-renders the component
     */
    const [restaurants, setRestaurants] = useState(resList);

    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={() => {
                    const filtered = restaurants.filter((restaurant) => {
                        return restaurant.info.avgRating >= 4;
                    });
                    setRestaurants(filtered);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resItem={restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;
