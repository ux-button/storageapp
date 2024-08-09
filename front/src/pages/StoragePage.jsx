import { useFetchAllProducts } from "../../hooks/useFetchAllProducts";
import { StorageCard } from "../components/common/StorageCard";

const StoragePage = () => {
  const { products } = useFetchAllProducts();

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4 space-y-4">
      <h1 className="text-3xl">Storage</h1>
      <section className="grid grid-cols-3 gap-2">
        {products.map((p) => {
          return (
            <StorageCard
              key={p.id}
              itemName={p.name}
              itemQuantity={p.quantity}
            />
          );
        })}
      </section>
    </div>
  );
};

export { StoragePage };
