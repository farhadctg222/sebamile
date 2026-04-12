import { db } from "../../lib/db";
import { verifyToken } from "../../lib/auth";

export async function POST(req) {
  const body = await req.json();

  const {
    name,
    phone,
    address,
    package_id,
    area_id,
    quantity,
    total,
    items // ✅ new (cart)
  } = body;

  // ✅ Case 1: Cart Order (multiple items)
  if (items && items.length > 0) {
    if (!name || !phone) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    try {
      // 🔥 main order insert
      const [orderResult] = await db.execute(
        `INSERT INTO orders (customer_name, phone, address, total_price) 
         VALUES (?, ?, ?, ?)`,
        [name, phone, address || null, Number(total || 0)]
      );

      const orderId = orderResult.insertId;

      // 🔥 insert each item
      for (const item of items) {
        await db.execute(
          `INSERT INTO order_items (order_id, package_id, quantity, price) 
           VALUES (?, ?, ?, ?)`,
          [
            orderId,
            Number(item.id),
            1,
            Number(item.price)
          ]
        );
      }

      return Response.json({ success: true, insertId: orderId });

    } catch (err) {
      console.error(err);
      return Response.json({ error: "Server error" }, { status: 500 });
    }
  }

  // ✅ Case 2: Old Single Order (your existing system)
  if (!name || !phone || !package_id || !area_id) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
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

    return Response.json({ success: true, insertId: result.insertId });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}




export async function GET(req) {
  try {
    const token = req.headers.get("authorization");

    const cleanToken = token?.replace("Bearer ", "");

    if (!cleanToken || !verifyToken(cleanToken)) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [orders] = await db.execute(`
      SELECT orders.*, areas.name as area_name
      FROM orders
      LEFT JOIN areas ON orders.area_id = areas.id
      ORDER BY orders.id DESC
    `);

    // items attach
    for (let order of orders) {
      const [items] = await db.execute(
        `SELECT order_items.*, packages.name
         FROM order_items
         JOIN packages ON order_items.package_id = packages.id
         WHERE order_items.order_id = ?`,
        [order.id]
      );

      order.items = items;
    }

    return Response.json(orders || []);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}