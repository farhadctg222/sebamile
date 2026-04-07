"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async () => {
    if (!form.email || !form.password) {
      alert("দয়া করে সমস্ত তথ্য পূরণ করুন।");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("কিছু ভুল হয়েছে, আবার চেষ্টা করুন।");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-green-600 text-center">
          Admin Login
        </h2>
        <p className="text-gray-600 text-center text-sm">
          আপনার অ্যাকাউন্টে প্রবেশ করতে লগইন করুন
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="ইমেইল"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="পাসওয়ার্ড"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "লোড হচ্ছে..." : "Login"}
        </button>

        <p className="text-center text-gray-500 text-sm">
          যদি আপনার অ্যাকাউন্ট না থাকে, <span className="text-green-600 font-semibold">Admin এর সাথে যোগাযোগ করুন।</span>
        </p>
      </div>
    </div>
  );
}