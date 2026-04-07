// /app/api/orders/route.js


import { db } from "../../lib/db";
import {verifyToken } from "../../lib/auth";


export async function POST(req) {
  const body = await req.json();

  const {
    name,
    phone,
    address,
    package_id,
    area_id,
    quantity,
    total
  } = body;

  // ✅ Validation
  if (!name || !phone || !package_id || !area_id) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // ✅ Insert এবং insertId পেতে result ধরে রাখা
    const [result] = await db.execute(
      `INSERT INTO orders 
      (customer_name, phone, address, package_id, area_id, quantity, total_price) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        phone,
        address || null,
        Number(package_id),
        Number(area_id),
        Number(quantity || 1),
        Number(total || 0)
      ]
    );

    // ✅ insertId return করা হচ্ছে
    return Response.json({ success: true, insertId: result.insertId });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}


// example (Node / MySQL)

// /app/api/orders/route.js


export async function GET(req) {
  const token = req.headers.get("authorization");

  if (!verifyToken(token)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [rows] = await db.execute(`
    SELECT orders.*, packages.name as package_name, areas.name as area_name
    FROM orders
    JOIN packages ON orders.package_id = packages.id
    JOIN areas ON orders.area_id = areas.id
    ORDER BY orders.id DESC
  `);

  return Response.json(rows);
}
// /app/api/orders/[id]/route.js






