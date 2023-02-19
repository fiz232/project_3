import { useState } from "react";
import { Link } from "react-router-dom";

export default function DisplayFood({ food, createFood }) {
  const [newForm, setNewForm] = useState({
    posterid: "",
    name: "",
    likes: 0,
    image: "",
    title: "",
    description: "",
    instructions: "",
  }); //initial newForm state

  const handleChange = (event) => {
    const value = { ...newForm, [event.target.name]: event.target.value };
    setNewForm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createFood(newForm);
    setNewForm({
      posterid: "",
      name: "",
      likes: 0,
      image: "",
      title: "",
      description: "",
      instructions: "",
    });
  };

  const loaded = () => {
    return (
      <div>
        {food.map((food, index) => {
          return (
            <div key={food._id}>
              <h3>Posted by :{food.name}</h3>
              <h4>Dish name:{food.title}</h4>
              <img src={food.image} width={200} alt={food.name} />
              <p>Description:{food.description}</p>
              <p>Instructions:{food.instructions}</p>
              <button>Like</button>
              <p style={{ display: "inline" }}>Likes:{food.likes}</p>
              <Link style={{ display: "block" }} to={`/food/${food._id}`}>
                Edit
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section className="form-style">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newForm.name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterid"
          value={newForm.posterid}
          placeholder="poster id"
          onChange={handleChange}
        />
        <input
          type="number"
          name="likes"
          value={newForm.likes}
          placeholder={0}
          onChange={handleChange}
        />
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
        <button type="submit">Create Recipe</button>
      </form>
      {food ? loaded() : loading()}
    </section>
  );
  //food ? loaded() : loading();
}
