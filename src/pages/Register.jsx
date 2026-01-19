import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerSuccess, registerFail } from "../stores/slices/register";
import { toast } from "react-toastify";

function Register() {
  const dispatch = useDispatch();

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Dispatch register action (simulate success)
    dispatch(registerSuccess({
      name: form.name,
      email: form.email,
      avatar: `https://i.pravatar.cc/150?u=${form.email}`, // simple avatar
    }));

    toast.success("Registered successfully!");
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">

      <form onSubmit={handleSubmit} className="border p-6 rounded w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

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

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <button
          type="submit"
          className="bg-red-500 text-white p-2 w-full rounded"
        >
          Register
        </button>

        <h3 className="text-sm text-center my-2">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 cursor-pointer font-semibold">
            Login
          </Link>
        </h3>
      </form>

    </div>
  );
}

export default Register;
