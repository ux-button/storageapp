import { Button } from "../components/common/Button";

const ProductPage = ({ isFavorite }) => {
  return (
    <div className="m-6">
      <div className="">
        <h1 className="text-3xl">Product attracting name</h1>
        <div className="flex p-4 rounded-xl space-x-2 bg-zinc-200">
          <a className="block" href="/edit">
            <Button text="Edit product" />
          </a>
          <Button text="Delete" />
        </div>
        <h2>Category: Goods for home</h2>
        <p>Material: Wood</p>
        <p>
          Эргономичные подставки под запястья из разных материалов: массив
          американского ореха, эпоксидная смола и силикон. Обеспечивают
          поддержку и комфорт рукам во время длительной печати или игр.
        </p>
        <a href="/">To home</a>
      </div>
    </div>
  );
};

export { ProductPage };
