import { useEffect, useState } from "react";

export const useScroll = () => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const handleScroll = () => {
      setHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    height,
    scrollToTop,
  };
};
