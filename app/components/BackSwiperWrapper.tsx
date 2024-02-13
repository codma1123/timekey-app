"use client";

import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, TouchEvent, useRef } from "react";

interface BackSwiperWrapperProp {
  children: ReactNode;
  className?: string;
  link?: string;
}
const BackSwiperWrapper = ({ children, className, link }: BackSwiperWrapperProp) => {
  const router = useRouter();
  const path = usePathname();

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!touchStartX.current) return;

    touchEndX.current = e.touches[0].clientX;
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;

    if (difference < -5 && touchStartX.current < 50) {
      link ? router.push(link) : router.back();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      key={path}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleSwipe}
      className={classNames(className)}
    >
      {children}
    </div>
  );
};

export default BackSwiperWrapper;
