"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        
        {/* About */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Sebamiles Food</h3>
          <p className="text-gray-200 text-sm">
            আমরা তাজা, সুস্বাদু এবং নিরাপদ খাবার সরবরাহ করি। দ্রুত ডেলিভারি এবং গ্রাহক সন্তুষ্টি আমাদের মূল লক্ষ্য।
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="text-gray-200 text-sm space-y-1">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">FAQ</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="text-gray-200 text-sm">📞 +880 1305573617</p>
          <p className="text-gray-200 text-sm">✉ support@sebamiles.com</p>
          <p className="text-gray-200 text-sm">🏠 Chattogram, Bangladesh</p>
        </div>

        {/* Social */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-200 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-200 hover:text-white transition">Instagram</a>
            <a href="#" className="text-gray-200 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-200 hover:text-white transition">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-700 text-gray-200 text-sm text-center py-4 mt-6">
        © {new Date().getFullYear()} Sebamiles Food. All rights reserved.
      </div>
    </footer>
  );
}