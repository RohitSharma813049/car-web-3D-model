import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <h3 className="text-sm">
        © {new Date().getFullYear()} CarX. All rights reserved.
      </h3>
    </footer>
  );
}

export default Footer;