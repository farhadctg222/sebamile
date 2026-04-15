// // /app/dashboard/page.js
// "use client";
// import StatusUpdate from "../componets/StatusUpdate";
// import { useEffect, useState } from "react";

// export default function Dashboard() {
//   const [orders, setOrders] = useState([]);
//   console.log(orders)

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log(token)

//     fetch("/api/orders", {
//       headers: {
//         authorization: token
//       }
//     })
//       .then(res => res.json())
//       .then(data => setOrders(data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold">Orders</h1>

//       {orders.map(o => (
//         <div key={o.id} className="border p-3 my-2">
//           <p>{o.customer_name}</p>
//           <p>{o.package_name}</p>
//           <p>{o.area_name}</p>
//           <p>Status: {o.status}</p>

//           <StatusUpdate  id={o.id}/>
//         </div>
//       ))}
//     </div>
//   );
// }




"use client";

import StatusUpdate from "../componets/StatusUpdate";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  console.log(orders)

  // ✅ edit state
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // ======================
  // LOAD ORDERS
  // ======================
  const loadOrders = () => {
    const token = localStorage.getItem("token");

    fetch("/api/orders", {
      headers: {
        authorization: token,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text);
        }
        return res.json();
      })
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to load orders:", err));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📦 Orders Dashboard
      </h1>

      {/* Orders Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {orders.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center mt-10">
            No orders found.
          </p>
        ) : (
          orders.map((o) => (
            <div
              key={o.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300"
            >

              {/* HEADER */}
              <div className="flex justify-between items-start mb-2">

                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {o.customer_name}
                  </h2>

                  {/* 🔥 ORDER NUMBER */}
                  <p className="text-xs text-gray-500">
                    Order # {o.id}
                  </p>
                </div>

                <span className="text-xs text-gray-500">
                  {o.created_at
                    ? new Date(o.created_at).toLocaleString()
                    : ""}
                </span>
              </div>

              {/* CONTACT */}
              <p className="text-sm text-gray-600">
                📞 {o.phone}
              </p>

              {/* ITEMS */}
              <div className="mt-2 mb-2">
                <strong className="text-sm text-gray-700">Items:</strong>

                {o.items && o.items.length > 0 ? (
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    {o.items.map((item, i) => (
                      <li key={i}>
                        • {item.name} (x{item.quantity || 1})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600">
                    {o.package_name} (x{o.quantity})
                  </p>
                )}
              </div>

              {/* PRICE */}
              <p className="text-sm text-gray-600">
                💰 Total: <strong>৳ {o.total_price}</strong>
              </p>

              {/* ADDRESS */}
              <p className="text-sm text-gray-600">
                📍 {o.area_name || ""} - {o.address}
              </p>

              {/* STATUS */}
              <div className="mt-3 mb-3">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full text-white
                  ${o.status === "pending" && "bg-gray-500"}
                  ${o.status === "confirmed" && "bg-blue-500"}
                  ${o.status === "cooking" && "bg-yellow-500"}
                  ${o.status === "delivered" && "bg-green-600"}
                  ${o.status === "cancelled" && "bg-red-500"}
                `}
                >
                  {o.status?.toUpperCase()}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between items-center">

                {/* STATUS UPDATE */}
                <StatusUpdate id={o.id} onUpdate={loadOrders} />

                {/* EDIT BUTTON */}
                <button
                  onClick={() => {
                    setEditId(o.id);
                    setEditData({
                      name: o.customer_name,
                      phone: o.phone,
                      address: o.address,
                    });
                  }}
                  className="text-blue-600 text-sm"
                >
                  Edit
                </button>
              </div>

              {/* EDIT FORM */}
              {editId === o.id && (
                <div className="mt-3 p-3 border rounded bg-gray-50">


                   <input
                    className="border p-2 w-full mb-2"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Name"/>

                  <input
                    className="border p-2 w-full mb-2"
                    value={editData.phone}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Phone"
                  />

                  <input
                    className="border p-2 w-full mb-2"
                    value={editData.address}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        address: e.target.value,
                      })
                    }
                    placeholder="Address"
                  />

                  <div className="flex gap-2">

                    <button
                      onClick={async () => {
                        const token = localStorage.getItem("token");

                       await fetch(`/api/orders/${o.id}`, {
                        method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${token}`, // 🔥 FIX
                              },
                                 body: JSON.stringify(editData),
                                });

                        setEditId(null);
                        loadOrders();
                      }}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditId(null)}
                      className="bg-gray-400 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>

                  </div>
                </div>
              )}

            </div>
          ))
        )}
      </div>
    </div>
  );
}