import { Button } from "./Button";

const StorageCard = ({ itemName, itemQuantity, id }) => {
  return (
    <div className="p-4 pb-5 space-y-3 bg-zinc-100 rounded-2xl">
      <a href={`/product/${id}`} className="block space-y-0">
        <h3 className="text-xl">{itemName}</h3>
        <p className="text-sm text-slate-400">Quantity: {itemQuantity}</p>
      </a>
      <a className="block" href={`/edit/${id}`}>
        <Button text="Edit" />
      </a>
    </div>
  );
};

export { StorageCard };
