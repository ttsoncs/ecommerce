import React from "react";

function useResizeToggle(setIsOpen, size) {
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > size) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
}

export default useResizeToggle;
