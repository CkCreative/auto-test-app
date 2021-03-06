import React, { useEffect, useState } from "react";

import slides from "./slides.json";

export default function Slider() {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    // get all the sliders
    let sliders = document.getElementsByClassName("slider-item");
    const interval = setInterval(() => {
      let items = sliders.length - 1;

      while (items >= 0) {
        // guard to stop going to the next slider when mouse is over the slider
        if (slider === 1) return;

        // when the sliders are all displayed, rotate to the end
        if (items == 0) {
          let last = sliders.length - 1;
          sliders[items].classList.remove("current");
          sliders[items].classList.add("previous");
          sliders[last]?.classList.remove("previous");
          sliders[last]?.classList.add("current");
          return;
        }

        // move to the next slider
        if (sliders[items].classList.contains("current")) {
          sliders[items].classList.remove("current");
          sliders[items].classList.add("previous");
          sliders[items - 1]?.classList.remove("previous");
          sliders[items - 1]?.classList.add("current");
          return;
        }
        items--;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slider]);

  // stop slider when mouse is brought over it, set 1 flag
  const stopSlider = (e: React.MouseEvent) => {
    setSlider(() => 1);
  };

  // resume slider when mouse goes out of the sider area, reset flag to 0
  const startSlider = (e: React.MouseEvent) => {
    setSlider(() => 0);
  };

  return (
    <>
      <div className="slider">
        <div
          onMouseOver={stopSlider}
          onMouseOut={startSlider}
          className="slider-items"
        >
          {slides.map((slide, index) => {
            if (index == 0) {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${slide.img})` }}
                  className="slider-item current"
                  id="counter"
                >
                  <div className="content">
                    <h2>
                      Get <span className="large-text">40%</span> Discount
                    </h2>
                    <p className="large-text">
                      THE <span>BIG</span> SALE
                    </p>
                    <button className="btn-primary">shop now</button>
                  </div>
                </div>
              );
            } else
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${slide.img})` }}
                  className="slider-item previous"
                  id="counter"
                >
                  <div className="content">
                    <h2>
                      Get <span className="large-text">40%</span> Discount
                    </h2>
                    <p className="large-text">
                      THE <span>BIG</span> SALE
                    </p>
                    <button className="btn-primary">shop now</button>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="slider-controls"></div>
      </div>
    </>
  );
}
