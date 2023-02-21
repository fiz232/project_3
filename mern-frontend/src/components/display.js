import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

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
      <h1 style={{ color: "white" }}>Post Your Own Origami Instructions!</h1>
      <br></br>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="name"
            value={newForm.name}
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="hidden"
            name="posterid"
            value={newForm.posterid}
            placeholder="poster id"
            onChange={handleChange}
          />
          <input
            type="hidden"
            name="likes"
            value={newForm.likes}
            placeholder={0}
            onChange={handleChange}
          />
          <Stack direction="horizontal" gap={3} className="stack">
            <Form.Label className="mb-3">Origami Name</Form.Label>
            <input
              style={{ width: "200px", borderRadius: "5px" }}
              type="text"
              name="title"
              value={newForm.title}
              placeholder="Name"
              onChange={handleChange}
            />
            <Form.Label className="mb-3">End product image</Form.Label>
            <input
              style={{ width: "300px", borderRadius: "5px" }}
              type="text"
              name="image"
              value={newForm.image}
              placeholder="Image URL"
              onChange={handleChange}
            />
            <Form.Label className="mb-3">Photo instructions</Form.Label>
            <input
              style={{ width: "300px", borderRadius: "5px" }}
              type="text"
              name="image"
              value={newForm.reference}
              placeholder="Image URL (optional)"
              onChange={handleChange}
            />
          </Stack>
          <br></br>
          <br></br>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              name="description"
              value={newForm.description}
              placeholder="Enter origami description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
            <Form.Control
              as="textarea"
              style={{ height: "300px" }}
              name="instructions"
              value={newForm.instructions}
              placeholder="Enter origami instructions"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            as="input"
            type="submit"
            variant="outline-light"
            value="Post Origami"
          />{" "}
          <br />
          <br />
          <br />
        </form>
      </div>
      {origami ? loaded() : loading()}
    </section>
  );
  //origami ? loaded() : loading();
}
