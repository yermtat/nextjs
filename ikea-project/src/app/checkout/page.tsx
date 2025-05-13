"use client";

import useCartStore from "@/store";
import { useState } from "react";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Checkout</h1>

      <div className="space-y-6">
        {cart.map(({ item, quantity }) => (
          <div
            key={item.name}
            className="flex justify-between items-center border-b pb-4 border-gray-200"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.summary}</p>
              <p className="text-sm text-gray-500">
                {quantity} x {item.price} $
              </p>
            </div>
            <p className="text-base font-semibold text-gray-800">
              {(item.price * quantity).toFixed(2)} $
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-6 border-gray-200">
        <span>Total:</span>
        <span>{total.toFixed(2)} $</span>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-8">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-gray-800 text-white text-lg font-medium py-3 rounded-md hover:bg-gray-700 transition"
        >
          Pay {total.toFixed(2)} $
        </button>
      </form>
    </div>
  );
}
