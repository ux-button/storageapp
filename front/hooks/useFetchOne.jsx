import { useState, useEffect } from "react";

const useFetchOne = (id) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5123/api/products/${id}`,
          {
            mode: "cors",
          }
        );
        const fetchedData = await response.json();
        console.log("fetch", fetchedData);
        setProduct(fetchedData[0]);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return [product];
};

export { useFetchOne };
