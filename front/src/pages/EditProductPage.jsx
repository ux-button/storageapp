import { Input } from "../components/common/Input";
import { Textfield } from "../components/Textfield";
import { Button } from "../components/common/Button";

const EditProductPage = () => {
  return (
    <div className="m-4 p-6 space-y-4 bg-zinc-200 rounded-xl">
      <h1 className="text-4xl">Edit product</h1>
      <a className="block" href="/">
        To home
      </a>
      <div className="space-y-4 flex flex-col">
        <Input value="Some value" label="Product name" />
        <Input value="Some value" label="Product category" />
        <Input value="Some value" label="Material" />
        <Textfield value="Tada" />
        <Button text="Save" />
      </div>
    </div>
  );
};

export { EditProductPage };
