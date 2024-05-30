import "./AddProduct.css";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { upload } from "@testing-library/user-event/dist/upload";
import { productsCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext)
  const [name, setName] = useState("");
  const [price, SetPrice] = userState(0);
  const [image, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [isSubmitting,setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePrice(event) {
    SetPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    SetPicture(file);
  }
  function onChangeDescripton(event) {
    SetDescripton(event.target.value);
  }
  function onFormSumbit(event) {
    event.preventDefault();
    if (!image) {
        alert("Please upload an picture");
        return;
    }
    setIsSubmitting(true);
    uploadProductPhoto(image)
    .then((pictureUrl) =>
      addDoc(productsCollection, {
        category:category.id,
        name:name,
        price:Number(price),
        image: pictureUrl,
        description:description,
        slug:name.replaceAll(" ","-").toLowerCase(),
      })
    )
      .then(() => {
        setName("");
        SetPrice(0.0);
        setPicture(null);
        setDescription("");
    })
      .catch((error) => {
     console.log("Failed to add product:", error);
    })
      .finally(() =>{
      setIsSubmitting(false);
    });
}
return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            name="price"
            step="any"
            onChange={onChangePrice}
            min={0}
            required
          />
        </label>
        <label>
          Picture:
          <input
            type="file"
            name="picture"
            onChange={onChangePicture}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            type=""
            name="description"
            value={description}
            onChange={onChangeDescription}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
}
