import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

let supportsPassive = false;
try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true;
    },
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
  // tslint:disable-next-line: no-empty
} catch (e) {}

const getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

const defaultOptions = {
  throttle: 100,
};

function useWindowScrollPosition(options?: any) {
  if (!process.browser) return { y: 0 };

  const opts = { ...defaultOptions, ...options };

  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handleScroll = throttle(() => {
      setPosition(getPosition());
    }, opts.throttle);

    window.addEventListener(
      'scroll',
      handleScroll,
      supportsPassive ? { passive: true } : false,
    );

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return position;
}

export default useWindowScrollPosition;
