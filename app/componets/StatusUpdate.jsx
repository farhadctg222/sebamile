"use client";
import { useState } from "react";

export default function StatusUpdate({ id, onUpdate }) {
  const [loading, setLoading] = useState(false);

  // ✅ status update
  const update = async (status) => {
    setLoading(true);

    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });

      if (res.ok) {
        alert("Status Updated!");
        onUpdate && onUpdate();
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error!");
    }

    setLoading(false);
  };

  // ❌ delete order
  const deleteOrder = async () => {
  if (!confirm("Are you sure?")) return;


  setLoading(true);

  try {
    const res = await fetch(`/api/orders/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      onUpdate && onUpdate(); // Refresh parent table
    } else {
      alert("Delete failed");
    }
  } catch (err) {
    console.error(err);
    alert("Error!");
  }

  setLoading(false);
};

  return (
    <div className="flex flex-wrap gap-2 mt-2">

      <button 
        disabled={loading}
        onClick={() => update("confirmed")}
        className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white text-sm disabled:opacity-50"
      >
        Confirm
      </button>

      <button 
        disabled={loading}
        onClick={() => update("cooking")}
        className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-white text-sm disabled:opacity-50"
      >
        Cooking
      </button>

      <button 
        disabled={loading}
        onClick={() => update("delivered")}
        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white text-sm disabled:opacity-50"
      >
        Delivered
      </button>

      <button 
        disabled={loading}
        onClick={() => update("cancelled")}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white text-sm disabled:opacity-50"
      >
        Cancel
      </button>

      <button 
        disabled={loading}
        onClick={deleteOrder}
        className="bg-black hover:bg-gray-800 px-3 py-1 rounded text-white text-sm disabled:opacity-50"
      >
        Delete
      </button>

    </div>
  );
}