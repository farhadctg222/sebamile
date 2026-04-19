"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function OrderSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const orderId = searchParams.get("id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">

        {/* ICON */}
        <div className="text-5xl mb-4">🎉</div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Order Successful!
        </h1>

        {/* ORDER NUMBER */}
        {orderId && (
          <div className="bg-gray-100 p-3 rounded mb-4">
            <p className="text-sm text-gray-600">Your Order Number</p>
            <p className="text-xl font-bold text-gray-800">
              #{orderId}
            </p>
          </div>
        )}

        {/* MESSAGE */}
        <p className="text-gray-600 mb-6">
          আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।  
          খুব শীঘ্রই আমরা আপনার সাথে যোগাযোগ করবো।
        </p>

        {/* INFO */}
        <div className="bg-green-100 p-3 rounded mb-6 text-sm text-green-800">
          📦 Delivery চলছে... <br />
          ⏱️ আনুমানিক সময়: ৩০-৪৫ মিনিট
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 justify-center">

          <button
            onClick={() => router.push("/")}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Home
          </button>

          

        </div>

      </div>

    </div>
  );
}