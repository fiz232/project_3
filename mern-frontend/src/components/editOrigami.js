import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditOrigami({ origami, editOrigami, deleteOrigami }) {
  const params = useParams(); // a hook from react router dom
  const id = params.id; //getting the id from the url! (url param)
  console.log(id);

  const navigate = useNavigate();

  const art = origami.find(
    (p) => p._id === id //array method to find object matching the id
  );

  const [newForm, setNewForm] = useState({
    posterid: art.posterid,
    name: art.name,
    likes: art.likes,
    image: art.image,
    title: art.title,
    description: art.description,
    reference: art.reference,
    instructions: art.instructions,
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
    editOrigami(newForm, id);
  };

  const del = (event) => {
    deleteOrigami(art._id);
    navigate("/"); //this is a redirect to another URL view
  };

  return (
    <div>
      <h4>Posted by :{art.name}</h4>
      <h1>{art.title}</h1>
      <img src={art.image} width={200} alt={art.name} />
      <p>Description:{art.description}</p>
      <p>Visual reference:</p>
      <img src={art.reference} width={400} alt={art.name} />
      <p>Instructions:{art.instructions}</p>

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
        Visual reference:
        <input
          type="text"
          name="reference"
          value={newForm.reference}
          placeholder="visual reference"
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
        <button type="submit">Edit Origami</button>
      </form>
      <button onClick={del}>Delete Origami</button>
      {/* {origami ? loaded() : loading()} */}
    </div>
  );
}
