import { CARD_URL } from '../utils/constants';

const cardStyle = {
    backgroundColor: '#f0f0f0'
};

const cardImage = {
    width: '235px',
    height: '185px',
    padding: '5px'
};

const RestaurantCard = (props) => {
    const { info } = props?.resItem;
    const imageSrc = `${CARD_URL}/${info.cloudinaryImageId}`;
    return (
        <div className='res-card' style={cardStyle}>
            <img alt='card-image' style={cardImage}
                src={imageSrc} />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(', ')}</h4>
            <h4>{info.avgRating} stars</h4>
            <h4>{info.sla.deliveryTime} minutes</h4>
            <h4>{info.costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
