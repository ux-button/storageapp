import { Input } from "../components/common/Input";

const EditProductPage = () => {
  return (
    <>
      <a className="block" href="/">
        To home
      </a>
      <section className="space-y-4">
        <Input value="Some value" label="Product name" />
        <Input value="Some value" label="Product category" />
        <Input value="Some value" label="Material" />
      </section>
    </>
  );
};

export { EditProductPage };
