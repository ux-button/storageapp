import { Button } from "./Button";

const StorageCard = ({ itemName, itemQuantity }) => {
  return (
    <div className="p-4 pb-5 space-y-3 bg-zinc-100 rounded-2xl">
      <a href="/product" className="space-y-0">
        <h3 className="text-xl">Some name</h3>
        <p className="text-sm text-slate-400">Quantity: 3</p>
      </a>
      <Button text="Edit" />
    </div>
  );
};

export { StorageCard };
