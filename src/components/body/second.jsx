import React from "react";

function Second() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
            alt="Car"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div data-aos="fade-left">
          <h2
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built for Speed & Comfort
          </h2>

          <p
            className="text-gray-600 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The new NSX is engineered with cutting-edge technology, premium
            materials, and unmatched performance. Every detail is designed
            to give you a thrilling driving experience.
          </p>

          {/* Features */}
          <ul
            className="space-y-3 mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <li>✅ 3.5L Twin-Turbo V6 Engine</li>
            <li>✅ 0–100 km/h in 3.0 seconds</li>
            <li>✅ Luxury Interior Design</li>
            <li>✅ Advanced Safety Systems</li>
          </ul>

          {/* Button */}
          <button
            className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            View Specifications
          </button>
        </div>

      </div>
    </section>
  );
}

export default Second;
