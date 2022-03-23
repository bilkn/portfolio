import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function useShowItemOnIntersect(options) {
  const [showItem, setShowItem] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
    ...options,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShowItem(true);
    }
  }, [entry]);

  return { showItem, ref };
}

export default useShowItemOnIntersect;
