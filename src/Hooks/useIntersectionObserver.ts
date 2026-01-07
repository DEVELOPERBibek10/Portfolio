import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver() {
  const sentinelRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    });
    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, []);

  return { sentinelRef, isScrolled, setIsScrolled };
}
