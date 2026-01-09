import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSectionId(visibleEntry.target.id);
        }
      },
      {
        threshold: 0.5,
      }
    );
    sectionIds.forEach((id: string) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSectionId;
}
