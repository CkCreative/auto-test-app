import { useEffect, useState } from "react";

import slides from "./slides.json";

export default function Slider() {
  const [options, setOptions] = useState<typeof slides | undefined>(slides);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!options) return;

      setOptions((state) => {
        if (!state) return state;

        const items = [...state];
        const end = items.pop();

        if (!end) return state;

        console.log(end);
        return [end, ...items];
      });
    }, 1000);

    return () => {
      console.log("reloaded");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slider-items">
          <div id="counter">{options[0].title}</div>
        </div>
        <div className="slider-controls"></div>
      </div>
    </>
  );
}
