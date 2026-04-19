"use client";

import { Suspense } from "react";
import OrderSuccessContent from "../../componets/OrderSuccessContent";
export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <OrderSuccessContent />
    </Suspense>
  );
}