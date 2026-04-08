"use client";

import Image from "next/image";
import { useState } from "react";

export default function StaffPage() {
  const [hovered, setHovered] = useState(null);

  const staff = [
    {
      id: 1,
      role: "Admin Manager",
      name: "You (Owner)",
      desc: "Manage orders, update status, control full system",
      image: "/staff/admin.jpg",
    },
    {
      id: 2,
      role: "Cook",
      name: "Kitchen Staff",
      desc: "Prepare fresh and hygienic food for customers",
      image: "/staff/cook.jpg",
    },
    {
      id: 3,
      role: "Delivery",
      name: "Rider",
      desc: "Deliver orders fast and safely",
      image: "/staff/rider.jpg",
    },
  ];

  return (
    <div className="bg-linear-to-br from-green-100 to-gray-100 p-6">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600">
          👥 Our Team
        </h1>
        <p className="text-gray-600 mt-2">
          Dedicated Team Behind Sebamiles
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {staff.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer
              ${hovered === s.id ? "scale-105 shadow-2xl" : ""}
            `}
          >

            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={s.image}
                alt={s.role}
                fill
                className={`object-cover transition-all duration-700
                  ${hovered === s.id ? "scale-110" : "scale-100"}
                `}
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/30 transition duration-500
                ${hovered === s.id ? "opacity-100" : "opacity-0"}
              `}/>
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800">
                {s.role}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {s.name}
              </p>
              <p className="text-gray-600 text-sm">
                {s.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        Powered by Sebamiles 🚀
      </div>
    </div>
  );
}