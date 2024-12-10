import { useContext, useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import UserContext from '../contexts/UserContext';


const Home = () => {
    /**
     * super powered local state variable
     * Note: When state variable changes, React re-renders the component
     */
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();

    const BestsellerRestaurantCard = withPromotedLabel(RestaurantCard);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9708217&lng=77.7683887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const resList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurants(resList);
        setFilteredRestaurants(resList);
        console.log(resList);
    };

    const { loggedInUser } = useContext(UserContext);
    const { setUserName } = useContext(UserContext);

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
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input type='text' className='border border-solid border-black'
                        value={searchText} onChange={(event) => {
                            setSearchText(event.target.value);
                        }} />
                    <button className='m-4 px-4 py-2 bg-green-200 rounded-lg' onClick={() => {
                        const filtered = restaurants.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurants(filtered);
                    }}>Search</button>
                </div>
                <div className='search p-4 flex items-center'>
                    <button className='px-4 py-2 bg-gray-400 rounded-lg' onClick={() => {
                        setSearchText('');
                        const filtered = restaurants.filter((restaurant) => {
                            return restaurant.info.avgRating >= 4.5;
                        });
                        setFilteredRestaurants(filtered);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className='search p-4 flex items-center'>
                    <label className='w-40'>Context API change: </label>
                    <input className='border border-black p-2' value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className='flex flex-wrap'>
                {
                    filteredRestaurants.map((restaurant) =>
                        <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                            {
                                restaurant.info.avgRating >= 4.5 ? <BestsellerRestaurantCard resItem={restaurant} /> : <RestaurantCard resItem={restaurant} />
                            }
                        </Link>)
                }
            </div>
        </div>
    );
};

export default Home;
