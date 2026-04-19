// /app/page.js

import PackageCard from "./componets/packageCard";
import FAQPage from "./componets/faq";
import Sponsors from "./componets/Sponsors";
import OrderTracking from "./componets/OrderTracking"
import StaffPage from "./staff/page";
// ✅ better error handling
async function getPackages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/packages`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch packages");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}

export default async function Home() {
  const data = await getPackages();

  return (
    <>
      

      <div className="p-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No packages available
          </p>
        )}
      </div>
      <StaffPage></StaffPage>
      <Sponsors></Sponsors>
     <OrderTracking></OrderTracking>
      <FAQPage></FAQPage>

    </>
  );
}