"use client";
import { useEffect, useState } from "react";

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

  if (!sponsors.length) return null; // loading বা no data

  return (
    <section className="bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Our Sponsors
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}