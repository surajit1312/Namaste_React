import { useEffect, useState } from 'react';
import { RESTAURANT_INFO_URL } from '../constants';

const useRestaurantInfo = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchMenu(resId);
    }, []);

    const fetchMenu = async (resId) => {
        const url = `${RESTAURANT_INFO_URL}${resId}`;
        const data = await fetch(url);
        const json = await data.json();
        setRestaurantInfo(json.data);
    };

    return restaurantInfo;
};

export default useRestaurantInfo;
