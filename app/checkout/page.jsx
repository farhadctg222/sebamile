"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = async () => {
    const res = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        items: cart,
        total,
      }),
    });

    const data = await res.json();

    alert("Order placed!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Checkout</h1>

      <input
        placeholder="Name"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Phone"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        placeholder="Address"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <p>Total: ৳ {total}</p>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 mt-3"
      >
        Place Order
      </button>
    </div>
  );
}