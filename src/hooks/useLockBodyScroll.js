import React from "react";

function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    const defaultStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = defaultStyle;
    };
  }, []);
}

export default useLockBodyScroll;
