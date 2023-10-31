import { useState } from 'react';

function useToggleNav(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);

  const toggleNavbar = () => {
    setToggle(prevToggleNav => !prevToggleNav);
  };

  return {
    toggle,
    toggleNavbar,
  };
}

export default useToggleNav;
