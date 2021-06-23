import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(url);
      const fetchedRes = await response.json();
      setData(fetchedRes);
      setStatus("fetched");
    };
    fetchData();
  }, [url]);

  return { data, status };
};

export default useFetch;
