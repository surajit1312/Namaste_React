import { useState } from 'react';
import ItemsList from './ItemsList';

const RestaurantCategory = ({ data, showList, setShowIndex }) => {
    // const [showList, setShowList] = useState(true);

    const categoryClickHandler = () => {
        // const toggleValue = showList;
        // setShowList(!toggleValue);
        setShowIndex();
    };

    return (
        <div>
            <div className='w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg rounded-3xl cursor-pointer' onClick={categoryClickHandler}>
                <div className='flex justify-between'>
                    <span className='font-bold text-lg'>
                        {data.title} ({data.itemCards.length})
                    </span>
                    { !showList && <span>🔽</span> }
                    { showList && <span>🔼</span> }
                </div>
                {showList && <ItemsList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
