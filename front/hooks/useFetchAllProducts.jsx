import { useEffect, useState } from "react";

const useFetchAllProducts = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5123/api/products", {
          mode: "cors",
        });
        const data = await response.json();
        setIsLoading(false);
        setProducts(data);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products };
};

export { useFetchAllProducts };
