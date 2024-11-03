import React from "react";
import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import { useDispatch , useSelector} from "react-redux";


export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems , amount , savings , storePickup , tax } = useSelector((state) => state.cartSlice);
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <CartItems items={cartItems}/>
          <OrderSummary amount={amount} savings={savings} storePickup={storePickup} tax={tax}  />
        </div>
      </div>
    </section>
  );
}
