import React, { useEffect } from "react";
import Herosection from "../components/body/herosection";
import Second from "../components/body/second";
import AOS from "aos";
import "aos/dist/aos.css";

function Body() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     // animation only once (recommended)
      offset: 100,    // trigger a bit earlier
    });
  }, []);

  return (
    <div>
      <Herosection />
      <Second />
    </div>
  );
}

export default Body;
