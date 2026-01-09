import { useEffect, useRef, useState } from "react";

export function useScrollTracker(threshold: number) {
  const sentinelRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold,
      }
    );
    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [threshold, isScrolled]);

  return { sentinelRef, isScrolled, setIsScrolled };
}
