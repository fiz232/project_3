import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DisplayOrigami from "./display";
import EditOrigami from "./editOrigami";
import AboutPage from "./about";
import LoginPage from "./login";
import RegisterPage from "./register";

//components: <Index/>,<Show/>,

export default function Main() {
  const URL = "http://localhost:3004/origami/";

  const [origami, setOrigami] = useState("");

  //GET
  const getOrigami = async () => {
    //fetch(URL).then

    //alternate way using async await (instead of promises)
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setOrigami(data); //updating origami state with the data retrieved from mongodb
  };

  //POST|Create
  const createOrigami = async (origami) => {
    console.log("origami :" + origami);
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(origami),
    });
    //update list of origami
    getOrigami();
  };

  //PUT|Edit
  const editOrigami = async (editedData, origamiId) => {
    await fetch(URL + origamiId, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    });
    getOrigami();
  };

  //DELETE|Remove
  const removeOrigami = async (removeId) => {
    await fetch(URL + removeId, {
      method: "delete",
    });
    getOrigami();
  };

  useEffect(() => {
    getOrigami();
  }, []); //fetch user data on page load (useEffect is needed otherwise the page will update infinitely)

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<DisplayOrigami origami={origami} createOrigami={createOrigami} />}
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/origami/:id"
          element={
            origami ? (
              <EditOrigami
                origami={origami}
                editOrigami={editOrigami}
                deleteOrigami={removeOrigami}
              />
            ) : (
              <h1>Loading...</h1>
            )
          }
        />
      </Routes>
    </div>
  );
}