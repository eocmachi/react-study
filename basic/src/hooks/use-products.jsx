import { useEffect, useState } from "react";

export default function useProducts({ onlySales }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoaded(true);
    setError(undefined);
    fetch(`data/${onlySales ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 받아옴");
        setProducts(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoaded(false));
    return () => {
      console.log("다시 들어감");
    };
  }, [onlySales]);

  return [loaded, error, products];
}
