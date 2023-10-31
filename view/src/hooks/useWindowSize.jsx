import { useEffect, useState } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    //remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //console.log(windowSize);
  return windowSize;
}

export default useWindowSize;
