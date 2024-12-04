import { CARD_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { info } = props?.resItem;
    const imageSrc = `${CARD_URL}/${info.cloudinaryImageId}`;
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-[500px]'>
            <img alt='card-image' className='rounded-lg h-[185px] w-[235px]'
                src={imageSrc} />
            <h3 className='font-bold py-4 text-lg'>{info.name}</h3>
            <h4>{info.cuisines.join(', ')}</h4>
            <h4>{info.avgRating} stars</h4>
            <h4>{info.sla.deliveryTime} minutes</h4>
            <h4>{info.costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
