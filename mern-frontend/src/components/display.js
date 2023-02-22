import { useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from "./likeButton";

export default function DisplayOrigami({
  origami,
  createOrigami,
  editOrigami,
}) {
  const [newForm, setNewForm] = useState({
    posterid: "",
    name: "",
    likes: 0,
    img: "",
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
      img: "",
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
              <img src={origami.img} width={200} alt={origami.name} />
              <p>Description:{origami.description}</p>
              <p>Visual reference:</p>
              <img src={origami.reference} width={400} alt={origami.name} />
              <p>Instructions:{origami.instructions}</p>
              {/* <button>Like</button> */}
              {sessionStorage.getItem("loggedInUser") ? (
                <div>
                  <p>User logged in</p>
                  <LikeButton
                    userLikes={origami.likes}
                    origamiId={origami._id}
                    editOrigami={editOrigami}
                  />
                </div>
              ) : (
                <p>You can not like this post unless you log in</p>
              )}
              {/* <LikeButton
                userLikes={origami.likes}
                origamiId={origami._id}
                editOrigami={editOrigami}
              /> */}
              {/* <p style={{ display: "inline" }}>Likes:{origami.likes}</p> */}
              <br />
              <button>
                <Link
                  style={{ display: "block" }}
                  to={`/origami/${origami._id}`}
                >
                  Edit
                </Link>
              </button>
              <hr />
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
          name="img"
          value={newForm.img}
          placeholder="img"
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
        Reference:
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
        <button type="submit">Post Origami</button>
      </form>
      {origami ? loaded() : loading()}
    </section>
  );
  //origami ? loaded() : loading();
}
