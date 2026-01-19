import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { isLoggedIn, user } = useSelector((state) => state.login);

  const linknav = ({ isActive }) =>
    isActive
      ? "text-red-500 font-bold underline"
      : "text-white hover:text-red-400";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 
                    bg-black/40 backdrop-blur-md text-white">

      {/* Left */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">
          Car <span className="text-red-500">X</span>
        </h1>

        <div className="flex gap-4">
          <NavLink to="/" className={linknav}>Home</NavLink>
          <NavLink to="/car" className={linknav}>Car</NavLink>
        </div>
      </div>

      {/* Right */}
      <div>
        {isLoggedIn ? (
          <button>
            <img
              src={user?.avatar || "https://i.pravatar.cc/40"}
              alt="profile"
              className="w-9 h-9 rounded-full border border-white/30 cursor-pointer"
            />
          </button>
        ) : (
          <NavLink to="/login" className={linknav}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
