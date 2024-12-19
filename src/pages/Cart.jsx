import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    // Convert cartItems to array format while preserving quantities
    Object.entries(cartItems).forEach(([productId, sizes]) => {
      Object.entries(sizes).forEach(([size, quantity]) => {
        if (quantity > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: quantity,
          });
        }
      });
    });
    setCartData(tempData);
  }, [cartItems]);

  const handleDelete = (id, size) => {
    // Directly set the quantity to 0 for the specific item and size
    updateQuantity(id, size, 0);
  };

  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity < 0 || newQuantity === '') return; // Prevent invalid input
    updateQuantity(id, size, parseInt(newQuantity));
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'購物'} text2={'車'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={`${item._id}-${item.size}`} // Changed key to be more specific
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt="product"
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                value={item.quantity} // Changed from defaultValue to value
                onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              />
              <img
                src={assets.bin_icon}
                alt="bin_icon"
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                onClick={() => handleDelete(item._id, item.size)}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              去買單
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
