"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">

        <div className="text-5xl mb-4">🎉</div>

        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Order Successful!
        </h1>

        {orderId && (
          <div className="bg-gray-100 p-3 rounded mb-4">
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="text-xl font-bold">#{orderId}</p>
          </div>
        )}

        <p className="text-gray-600 mb-6">
          আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Go Home
        </button>

      </div>

    </div>
  );
}