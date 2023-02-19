import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditFood({ food, editFood, deleteFood }) {
  const params = useParams(); // a hook from react router dom
  const id = params.id; //getting the id from the url! (url param)
  console.log(id);


  const navigate = useNavigate();

  const dish = food.find(
    (p) => p._id === id //array method to find object matching the id
  );

  const [newForm, setNewForm] = useState({
    posterid: dish.posterid,
    name: dish.name,
    likes: dish.likes,
    image: dish.image,
    title: dish.title,
    description: dish.description,
    instructions: dish.instructions,
  });

  //Handlers

  const handleChange = (event) => {
    const newFormValue = {
      ...newForm,
      [event.target.name]: event.target.value,
    };
    setNewForm(newFormValue);
    //console.log(newForm)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editFood(newForm, id);
  };

  const del = (event) => {
    deleteFood(dish._id);
    navigate("/"); //this is a redirect to another URL view
  };

  return (
    <div>
      <h1>Posted by :{dish.name}</h1>
      <h2>Dish name:{dish.title}</h2>
      <img src={dish.image} width={200} alt={dish.name} />
      <p>Description:{dish.description}</p>
      <p>Instructions:{dish.instructions}</p>

      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="name"
          value={newForm.name}
          placeholder="name"
          onChange={handleChange}
        /> */}
        Title:
        <input
          type="text"
          name="title"
          value={newForm.title}
          placeholder="title"
          onChange={handleChange}
        />
        Image:
        <input
          type="text"
          name="image"
          value={newForm.image}
          placeholder="image"
          onChange={handleChange}
        />
        Description:
        <textarea
          cols="60"
          rows="5"
          name="description"
          value={newForm.description}
          placeholder="description"
          onChange={handleChange}
        />
        Instructions:
        <textarea
          cols="80"
          rows="20"
          name="instructions"
          value={newForm.instructions}
          placeholder="instructions"
          onChange={handleChange}
        />
        <button type="submit">Edit Recipe</button>
      </form>
      <button onClick={del}>Delete Recipe</button>
      {/* {food ? loaded() : loading()} */}
    </div>
  );

}
