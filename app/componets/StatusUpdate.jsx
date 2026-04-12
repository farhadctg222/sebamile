"use client";
import { useState } from "react";

export default function StatusUpdate({ id, onUpdate }) {
  const [loading, setLoading] = useState(false);

  const getToken = () => localStorage.getItem("token");

  const update = async (status) => {
    setLoading(true);

    const token = getToken();

    await fetch(`/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`, // 🔥 FIX
      },
      body: JSON.stringify({ status }),
    });

    onUpdate && onUpdate();
    setLoading(false);
  };

  const deleteOrder = async () => {
    if (!confirm("Delete?")) return;

    const token = getToken();

    await fetch(`/api/orders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`, // 🔥 FIX
      },
    });

    onUpdate && onUpdate();
  };

  return (
    <div className="flex gap-2 flex-wrap">

      <button onClick={() => update("confirmed")}>Confirm</button>
      <button onClick={() => update("cooking")}>Cooking</button>
      <button onClick={() => update("delivered")}>Delivered</button>
      <button onClick={() => update("cancelled")}>Cancel</button>

      <button onClick={deleteOrder}>Delete</button>

    </div>
  );
}