"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { cart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ quantity সহ total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ submit
  const handleSubmit = async () => {
    // 🔥 validation
    if (!form.name || !form.phone || !form.address) {
      alert("সব তথ্য পূরণ করুন");
      return;
    }

    if (cart.length === 0) {
      alert("Cart empty!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ VERY IMPORTANT
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.address,
          items: cart,
          total,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Order failed!");
        return;
      }

      alert("✅ Order placed successfully!");

      // ✅ redirect
      router.push("/order-success");

    } catch (err) {
      console.error(err);
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧾 Checkout</h1>

      {/* Inputs */}
      <input
        placeholder="Name"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="Address"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      {/* Cart Preview */}
      <div className="mt-4">
        <h2 className="font-semibold mb-2">Order Summary:</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between text-sm mb-1">
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>৳ {item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <h2 className="mt-4 font-bold text-lg">
        Total: ৳ {total}
      </h2>

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mt-4 rounded w-full"
      >
        {loading ? "Placing..." : "Place Order"}
      </button>
    </div>
  );
}