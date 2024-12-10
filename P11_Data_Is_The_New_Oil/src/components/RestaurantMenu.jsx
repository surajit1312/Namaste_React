import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import { CARD_URL } from '../utils/constants';
import useRestaurantInfo from '../utils/hooks/useRestaurantInfo';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [showIndex, setShowIndex] = useState(0);

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
        cloudinaryImageId,
        totalRatingsString,
        locality,
        city
    } = restaurantInfo?.cards?.[2]?.card?.card?.info;
    const resInfoCard = restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card;
    const resInfoData = resInfoCard?.itemCards || resInfoCard?.categories;
    const categories = restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((cardCategory) => cardCategory?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log(categories);

    const cardImage = {
        width: '235px',
        height: '185px',
        padding: '5px'
    };

    const imageSrc = `${CARD_URL}/${cloudinaryImageId}`;

    return (
        <div className='text-left m-auto p-4'>
            <h1 className='font-bold my-6 w-6/12 text-2xl flex justify-center'>{name}</h1>
            <div className='flex justify-center'>
                <div className='rounded-3xl shadow-2xl p-4 my-4 w-6/12 float-left'>
                    <h4 className='font-bold my-2'>⭐️ {avgRating} ({totalRatingsString} ratings) · {costForTwoMessage}</h4>
                    <p className='font-bold text-lg text-orange-600 underline my-2'>{cuisines.join(', ')}</p>
                    <p className='font-medium text-lg my-2'>Outlet: {locality}, {city}</p>
                    <p className='font-medium text-lg my-2'>Delivery: {sla?.minDeliveryTime} - {sla?.maxDeliveryTime} mins</p>
                </div>
                {/* <div className='float-right'>
                    <img alt='card-image' className='w-[235px] h-[185px] p-1 my-3 rounded-3xl' src={imageSrc} />
                </div> */}
            </div>
            {
                categories.map((category, index) => (
                    <RestaurantCategory key={category?.card?.card?.title}
                        data={category?.card?.card} showList={index == showIndex && true}
                        setShowIndex={() => setShowIndex(index)} />
                ))
            } 
        </div>
    );
};

export default RestaurantMenu;
