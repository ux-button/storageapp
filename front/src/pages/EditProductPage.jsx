import { Input } from "../components/common/Input";
import { Textfield } from "../components/Textfield";
import { Button } from "../components/common/Button";
import { useFetchOne } from "../../hooks/useFetchOne";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [material, setMaterial] = useState();
  const [discription, setDiscription] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5123/api/products/${productId}`,
          {
            mode: "cors",
          }
        );
        const fetchedData = await response.json();
        const { name, category, material, discription } = fetchedData[0];

        setName(name);
        setCategory(category);
        setMaterial(material);
        setDiscription(discription);
      } catch (err) {}
    };

    fetchData();
  }, []);

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
    const payload = { id: productId, name, category, material, discription };
    const response = await fetch(
      `http://localhost:5123/api/edit/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.status === 201) {
      navigate("/");
    }
  };

  if (!name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4 p-6 space-y-4 bg-zinc-200 rounded-xl">
      <h1 className="text-4xl">{name}</h1>
      <a className="block" href="/">
        To home
      </a>
      <div className="space-y-4 flex flex-col">
        <Input
          handleChange={handleChangeName}
          value={name}
          label="Product name"
        />
        <Input
          handleChange={handleChangeCategory}
          value={category}
          label="Product category"
        />
        <Input
          handleChange={handleChangeMaterial}
          value={material}
          label="Material"
        />
        <Textfield handleChange={handleChangeDiscription} value={discription} />
        <Button handleClick={handleSubmit} text="Save" />
      </div>
    </div>
  );
};

export { EditProductPage };
