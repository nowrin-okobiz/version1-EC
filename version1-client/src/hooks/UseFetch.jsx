import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [url]);
  return [product, loading];
};

export default UseFetch;
