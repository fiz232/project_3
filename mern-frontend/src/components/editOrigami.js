import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

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
    img: art.img,
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
    <div class="container">
      <br></br>
      <br></br>
      <CardGroup>
        <Card>
          <h4>Posted by: {art.name}</h4>
          <h1>{art.title}</h1>
          <img className="cardImage" src={art.img} alt={art.name} />
          <br></br>
          <h6>Description:</h6>
          <p>{art.description}</p>
          <br></br>
          <h6>Photo instructions:</h6>
          <img
            style={{ marginLeft: "450px" }}
            src={art.reference}
            width={400}
            alt={art.name}
          />
          <br></br>
          <h6>Instructions:</h6>
          <p> {art.instructions}</p>
        </Card>
      </CardGroup>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="name"
          value={newForm.name}
          placeholder="name"
          onChange={handleChange}
        /> */}
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
            name="img"
            value={newForm.img}
            placeholder="Image URL"
            onChange={handleChange}
          />
          <Form.Label className="mb-3">Photo instructions</Form.Label>
          <input
            style={{ width: "300px", borderRadius: "5px" }}
            type="text"
            name="reference"
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
          value="Edit Origami"
        />{" "}
        <Button
          onClick={del}
          as="input"
          type="submit"
          variant="outline-light"
          value="Delete Origami"
        />{" "}
        <br></br>
        <br></br>
        <Link to="/">
          {" "}
          <Button variant="outline-light">Back</Button>
        </Link>
        <br />
        <br />
        <br />
      </form>
      {/* {origami ? loaded() : loading()} */}
    </div>
  );
}
