import { Button } from "../components/common/Button";
import { useFetchOne } from "../../hooks/useFetchOne";
import { useParams } from "react-router-dom";

const ProductPage = ({ isFavorite }) => {
  const { id } = useParams();
  const [product] = useFetchOne(id);

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log(product.name);

  return (
    <div className="m-6">
      <div className="">
        <h1 className="text-3xl">{product.name}</h1>
        <div className="flex p-4 rounded-xl space-x-2 bg-zinc-200">
          <a className="block" href="/edit">
            <Button text="Edit product" />
          </a>
          <Button text="Delete" />
        </div>
        <h2>Category: {product.category}</h2>
        <p>Material: {product.material}</p>
        <p>{product.discription}</p>
        <a href="/">To home</a>
      </div>
    </div>
  );
};

export { ProductPage };
