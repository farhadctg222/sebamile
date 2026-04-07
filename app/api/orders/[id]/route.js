import { db } from "../../../lib/db";

export async function PUT(req, { params }) {
  const { id } = await params;
  const { status } = await req.json();
  console.log(id, status)

  await db.execute(
    "UPDATE orders SET status=? WHERE id=?",
    [status, id]
  );

  return Response.json({ success: true });
}

// ✅ DELETE API


export async function DELETE(req, { params }) {
  // ❌ old: const id = params;
  const { id } = await params; // ✅ destructure correctly
  console.log("Deleting order with ID:", id);

  if (!id) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // ❌ id এখন string, যদি DB expect number হয় তবে convert:
  const numericId = Number(id);

  await db.execute("DELETE FROM orders WHERE id=?", [numericId]);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}


// export async function GET(req, { params }) {
//   const { id } = params; // ✅ FIXED

//   console.log("Fetching package with ID:", id);

//   const [rows] = await db.execute(
//     "SELECT id, name, price FROM packages WHERE id=?",
//     [id]
//   );

//   console.log("DB RESULT:", rows); // ✅ debug

//   return Response.json(rows[0] || {});
// }



export async function GET(req, { params }) {
  const { id } = await params;

  if (!id) {
    return new Response(
      JSON.stringify({ error: "Order ID missing" }),
      { status: 400 }
    );
  }

  try {
    const [rows] = await db.execute(
      `SELECT id, customer_name, total_price, status, phone,  quantity, address, delivery_note, created_at 
       FROM orders WHERE id=?`,
      [id]
    );

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "Order not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(rows[0]), { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}