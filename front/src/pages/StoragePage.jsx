import { StorageCard } from "../components/common/StorageCard";

const StoragePage = () => {
  return (
    <>
      <h1>Here a lot of products</h1>
      <a to="product">To product</a>
      <section className="grid grid-cols-3 gap-2 p-4">
        <StorageCard />
        <StorageCard />
        <StorageCard />
        <StorageCard />
        <StorageCard />
      </section>
    </>
  );
};

export { StoragePage };
