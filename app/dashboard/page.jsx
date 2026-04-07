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
  console.log(orders);

  const loadOrders = () => {
    const token = localStorage.getItem("token");

    fetch("/api/orders", {
      headers: {
        authorization: token
      }
    })
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error("Failed to load orders:", err));
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
            <div key={o.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
              
              {/* Header Info */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-800">{o.customer_name}</h2>
                <span className="text-sm text-gray-500">{new Date(o.created_at).toLocaleString()}</span>
              </div>

              {/* Contact */}
              <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {o.phone}</p>

              {/* Package Details */}
              <p className="text-sm text-gray-600 mb-1"><strong>Package:</strong> {o.package_name}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Quantity:</strong> {o.quantity}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Total Price:</strong> ৳ {o.total_price}</p>

              {/* Address & Area */}
              <p className="text-sm text-gray-600 mb-1"><strong>Area:</strong> {o.area_name}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Address:</strong> {o.address}</p>

              {/* Delivery Note */}
              {o.delivery_note && (
                <p className="text-sm text-gray-600 mb-1"><strong>Note:</strong> {o.delivery_note}</p>
              )}

              {/* Status Badge */}
              <div className="mt-2 mb-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full text-white
                  ${o.status === "pending" && "bg-gray-500"}
                  ${o.status === "confirmed" && "bg-blue-500"}
                  ${o.status === "cooking" && "bg-yellow-500"}
                  ${o.status === "delivered" && "bg-green-600"}
                  ${o.status === "cancelled" && "bg-red-500"}
                `}>
                  {o.status.toUpperCase()}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end">
                <StatusUpdate 
                  id={o.id} 
                  onUpdate={loadOrders}
                />
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}