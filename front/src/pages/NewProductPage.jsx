import { Input } from "../components/common/Input";
import { Textfield } from "../components/Textfield";
import { Button } from "../components/common/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProductPage = () => {
  const [name, setName] = useState("qwert");
  const [category, setCategory] = useState("qwert");
  const [material, setMaterial] = useState("qwert");
  const [discription, setDiscription] = useState("qwert");

  const navigate = useNavigate();

  const handleChangeName = (value) => {
    setName(value);
  };
  const handleChangeCategory = (value) => {
    setCategory(value);
  };
  const handleChangeMaterial = (value) => {
    setMaterial(value);
  };
  const handleChangeDiscription = (value) => {
    setDiscription(value);
  };

  const handleSubmit = async () => {
    console.log("start sending...");
    const payload = { name, category, material, discription };
    const response = await fetch("http://localhost:5123/api/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(response.status);
    if (response.status === 201) {
      navigate("/");
    }
  };

  return (
    <div className="m-4 p-6 space-y-4 bg-zinc-200 rounded-xl">
      <h1 className="text-4xl">Add new product</h1>
      <a className="block" href="/">
        To home
      </a>
      <div className="space-y-4 flex flex-col">
        <Input
          value={name}
          handleChange={handleChangeName}
          label="Product name"
        />
        <Input
          value={category}
          handleChange={handleChangeCategory}
          label="Product category"
        />
        <Input
          value={material}
          handleChange={handleChangeMaterial}
          label="Material"
        />
        <Textfield value={discription} handleChange={handleChangeDiscription} />
        <Button handleClick={handleSubmit} text="Add product" />
      </div>
    </div>
  );
};

export { NewProductPage };
