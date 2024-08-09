import { StorageCard } from "../components/common/StorageCard";

const StoragePage = () => {
  return (
    <div className="m-4 space-y-4">
      <h1 className="text-3xl">Here a lot of products</h1>
      <a to="product">To product</a>
      <section className="grid grid-cols-3 gap-2">
        <StorageCard />
        <StorageCard />
        <StorageCard />
        <StorageCard />
        <StorageCard />
      </section>
    </div>
  );
};

export { StoragePage };
