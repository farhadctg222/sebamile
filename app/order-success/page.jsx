"use client";
import { useSearchParams } from "next/navigation";

export default function OrderSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        
        {/* Success Icon */}
        <div className="text-6xl mb-4">✅</div>

        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Order Successful!
        </h2>

        <p className="text-gray-600 mb-4">
          আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে।
        </p>

        {/* Order Number */}
        <div className="bg-green-100 p-4 rounded-lg mb-4">
          <p className="text-gray-700">আপনার Order Number</p>
          <p className="text-2xl font-bold text-green-700">
            #{orderId}
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          দয়া করে এই নম্বরটি সংরক্ষণ করুন।
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}