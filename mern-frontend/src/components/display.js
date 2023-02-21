import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function DisplayOrigami({ origami, createOrigami }) {
  const [newForm, setNewForm] = useState({
    posterid: "",
    name: "",
    likes: 0,
    image: "",
    title: "",
    description: "",
    reference: "",
    instructions: "",
  }); //initial newForm state

  const handleChange = (event) => {
    const value = { ...newForm, [event.target.name]: event.target.value };
    setNewForm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createOrigami(newForm);
    setNewForm({
      posterid: "",
      name: "",
      likes: 0,
      image: "",
      title: "",
      description: "",
      reference: "",
      instructions: "",
    });
  };

  const loaded = () => {
    return (
      <div>
        {origami.map((origami, index) => {
          return (
            <div key={origami._id}>
              <h4>Posted by :{origami.name}</h4>
              <h1>{origami.title}</h1>
              <img src={origami.image} width={200} alt={origami.name} />
              <p>Description:{origami.description}</p>
              <p>Visual reference:</p>
              <img src={origami.reference} width={400} alt={origami.name} />
              <p>Instructions:{origami.instructions}</p>
              <button>Like</button>
              <p style={{ display: "inline" }}>Likes:{origami.likes}</p>
              <Link style={{ display: "block" }} to={`/origami/${origami._id}`}>
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
        {/* <Form.Group
          controlId="formFileMultiple"
          className="mb-3"
          type="text"
          name="image"
          value={newForm.image}
          placeholder="image"
          onChange={handleChange}
        >
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group> */}
        <input
          type="text"
          name="image"
          value={newForm.image}
          placeholder="image"
          onChange={handleChange}
        />
        Reference:
        <input
          type="text"
          name="image"
          value={newForm.reference}
          placeholder="visual reference"
          onChange={handleChange}
        />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            cols="60"
            rows="10"
            name="description"
            value={newForm.description}
            placeholder="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Origami Instructions</Form.Label>
          <Form.Control
            as="textarea"
            cols="80"
            rows="20"
            name="instructions"
            value={newForm.instructions}
            placeholder="instructions"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          as="input"
          type="submit"
          variant="outline-light"
          value="Post Origami"
        />{" "}
      </form>
      {origami ? loaded() : loading()}
    </section>
  );
  //origami ? loaded() : loading();
}
