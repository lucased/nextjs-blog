import { useState, useEffect } from "react";

const useInfiniteScroll = (element) => {
  const [loadMore, setLoadMore] = useState(null);

  useEffect(() => {
    element.current.addEventListener("scroll", (e) => {
      const el = e.target;
      if (el.scrollTop + el.clientHeight === el.scrollHeight) {
        setLoadMore(true);
      }
    });
  }, [element]);

  return [loadMore, setLoadMore];
};

export default useInfiniteScroll;
