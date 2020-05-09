import { useState, useEffect } from "react";
import { throttle } from "lodash";

let supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function () {
      supportsPassive = true;
    },
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

let getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

let defaultOptions = {
  throttle: 100,
};

function useWindowScrollPosition(options?: any) {
  if (!process.browser) return { y: 0 };

  let opts = Object.assign({}, defaultOptions, options);

  let [position, setPosition] = useState(getPosition());

  useEffect(() => {
    let handleScroll = throttle(() => {
      setPosition(getPosition());
    }, opts.throttle);

    window.addEventListener(
      "scroll",
      handleScroll,
      supportsPassive ? { passive: true } : false
    );

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
}

export default useWindowScrollPosition;
