"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">

        {/* ICON */}
        <div className="text-5xl mb-4">🎉</div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Order Confirmed!
        </h1>

        {/* ORDER ID */}
        {orderId && (
          <div className="bg-gray-100 p-3 rounded mb-4">
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="text-xl font-bold text-gray-800">
              #{orderId}
            </p>
          </div>
        )}

        {/* MESSAGE */}
        <p className="text-gray-600 mb-4">
          আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে। আমাদের টিম খুব দ্রুত কাজ শুরু করেছে।
        </p>

        {/* DELIVERY TIME */}
        <div className="bg-green-100 p-3 rounded mb-4 text-sm text-green-800">
          ⏱️ আনুমানিক ডেলিভারি সময়: <b>30 - 45 মিনিট</b>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-gray-100 p-4 rounded text-sm text-gray-700 mb-6">
          <p className="font-semibold mb-1">📞 Contact Support</p>
          <p>01305573617</p>
          <p>121/B Dowell Bhaban, Court Hill</p>
          <p>Chattogram</p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => router.push("/")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}