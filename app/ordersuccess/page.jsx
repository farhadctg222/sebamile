"use client";

import { Suspense } from "react";
import OrderSuccessContent from "./OrderSuccessContent/page";


export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
    <OrderSuccessContent></OrderSuccessContent>
    </Suspense>
  );
}