import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';


const Body = () => {
    /**
     * super powered local state variable
     * Note: When state variable changes, React re-renders the component
     */
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9708217&lng=77.7683887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const resList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurants(resList);
        setFilteredRestaurants(resList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (restaurants?.length === 0) {
        return (
            <Shimmer />
        );
    }

    return (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }} />
                    <button className='search-btn' onClick={() => {
                        const filtered = restaurants.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurants(filtered);
                    }}>Search</button>
                </div>
                <button className='filter-btn' onClick={() => {
                    setSearchText('');
                    const filtered = restaurants.filter((restaurant) => {
                        return restaurant.info.avgRating >= 4.5;
                    });
                    setFilteredRestaurants(filtered);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resItem={restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;
