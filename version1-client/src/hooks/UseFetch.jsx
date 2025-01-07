import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [url]);
  return [data, loading];
};

export default UseFetch;
