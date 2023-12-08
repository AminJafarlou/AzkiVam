import { useEffect, useState } from "react";

export const useScrollPercentage = (scrollThreshold: number = 0.9): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const totalScrollHeight =
        document.documentElement.scrollHeight - windowHeight;
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop + (document.documentElement.scrollTop || 0);

      const scrollPercentage = currentScroll / totalScrollHeight;

      if (scrollPercentage >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return isScrolled;
};
