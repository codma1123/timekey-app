import { useEffect, useState } from "react";

export const useScroll = ({ breakpoint }: { breakpoint?: number }) => {
  const [height, setHeight] = useState<number>();

  const blocked = height > breakpoint;

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
    blocked,
    height,
    scrollToTop,
  };
};
