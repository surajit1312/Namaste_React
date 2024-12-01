import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import { CARD_URL } from '../utils/constants';
import useRestaurantInfo from '../utils/hooks/useRestaurantInfo';

const RestaurantMenu = () => {

    const { resId } = useParams();

    /**
     * using custom hooks 'useRestaurantInfo'.
     * This helps in achieving Single Responsibility Principle (SRP - SOLID Principles)
     * so, this component will be responsible to display data only and the 
     * API call to bring the data is abstracted out to the hook 'useRestaurantInfo'
     */
    const restaurantInfo = useRestaurantInfo(resId);

    if (!restaurantInfo) {
        return <Shimmer />;
    }
    const {
        name,
        avgRating,
        costForTwoMessage,
        cuisines,
        sla,
        cloudinaryImageId
    } = restaurantInfo?.cards?.[2]?.card?.card?.info;
    const resInfoCard = restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card;
    const resInfoData = resInfoCard?.itemCards || resInfoCard?.categories;
    console.log(resInfoData);

    const cardImage = {
        width: '235px',
        height: '185px',
        padding: '5px'
    };

    const imageSrc = `${CARD_URL}/${cloudinaryImageId}`;

    return (
        <div>
            <div className='res-info'>
                <div>
                    <h3>{name}</h3>
                    <h4>Cuisine: {cuisines.join(', ')}</h4>
                    <h4>Rating: {avgRating} stars</h4>
                    <h4>Delivery Time: {sla.deliveryTime} minutes</h4>
                    <h4>Cost for Two: {costForTwoMessage}</h4>
                </div>
                <div>
                    <img alt='card-image' style={cardImage}
                        src={imageSrc} />
                </div>
            </div>
            <div className='res-menu'>
                <h2>Menu</h2>
                <ul>
                    {
                        resInfoData.map(item => {
                            if (item?.card?.info) {
                                const menuInfo = item?.card?.info;
                                return (<li>{menuInfo?.name} - ₹{(menuInfo?.price / 100) || menuInfo?.defaultPrice / 100}</li>);
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
