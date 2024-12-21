import { useDispatch, useSelector } from 'react-redux';
import ItemsList from './ItemsList';
import { clearCart } from '../store/reducers/cart.reducer';

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold float-left'>Cart</h1>
            <div className='p-2 float-right'>
                <button className='p-2 bg-black text-white rounded-lg'
                    onClick={() => handleClearCart ()}>
                    Clear Cart
                </button>
            </div>
            <div className='w-6/12 m-auto'>
                <div className='p-2 m-2'>
                    { cartItems?.length == 0 && <div className='font-bold text-lg'>Your cart is empty!</div>}
                    { cartItems?.length > 0 && <ItemsList items={cartItems} />}
                </div>
            </div>
        </div>
    );
};

export default Cart;
