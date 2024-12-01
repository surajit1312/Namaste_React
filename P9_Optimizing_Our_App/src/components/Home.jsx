import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';


const Home = () => {
    /**
     * super powered local state variable
     * Note: When state variable changes, React re-renders the component
     */
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9708217&lng=77.7683887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const resList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurants(resList);
        setFilteredRestaurants(resList);
    };

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
        fetchData();
    }, []);

    if (!onlineStatus) {
        return (
            <div className='body'>
                <h2>Looks like you are offline. Please check your internet connectivity!</h2>
            </div>
        );
    }
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
                    filteredRestaurants.map((restaurant) =>
                        <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                            <RestaurantCard resItem={restaurant} />
                        </Link>)
                }
            </div>
        </div>
    );
};

export default Home;
