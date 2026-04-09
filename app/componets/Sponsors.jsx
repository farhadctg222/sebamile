"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const res = await fetch("/api/sponsors");
      const data = await res.json();
      setSponsors(data);
    };
    fetchSponsors();
  }, []);

  if (!sponsors.length) return null;

  return (
    <section className="bg-gray-100 overflow-hidden py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Our Sponsors
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 100 }}   // 👉 right side
              whileInView={{ opacity: 1, x: 0 }} // 👉 center
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }} // একবারই animation হবে
              className="bg-white rounded-xl shadow p-4 flex items-center justify-center"
            >
              <div className="w-full h-56 flex items-center justify-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain"
                />
                      </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}