import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../stores/slices/Login";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();

  // Form state
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    // Simulate login success (replace with real API later)
    dispatch(
      setLogin({
        name: "Shivam",
        email: form.email,
        avatar: `https://i.pravatar.cc/150?u=${form.email}`,
      })
    );

    toast.success("Login successful!");
    setForm({ email: "", password: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <form onSubmit={handleSubmit} className="border p-6 rounded w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <button
          type="submit"
          className="bg-red-500 text-white p-2 w-full rounded"
        >
          Login
        </button>

        <h3 className="text-sm text-center my-2">
          Don’t have an account?{" "}
          <Link to="/register" className="text-red-500 cursor-pointer font-semibold">
            Register
          </Link>
        </h3>
      </form>
    </div>
  );
}

export default Login;
