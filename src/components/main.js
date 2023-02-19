import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DisplayFood from "./display";
import EditFood from "./editFood";
import AboutPage from "./about";
import LoginPage from "./login";
import RegisterPage from "./register";

//components: <Index/>,<Show/>,

export default function Main() {
  const URL = "http://localhost:3004/food/";

  const [food, setFood] = useState("");

  //GET
  const getFood = async () => {
    //fetch(URL).then

    //alternate way using async await (instead of promises)
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setFood(data); //updating food state with the data retrieved from mongodb
  };

  //POST|Create
  const createFood = async (food) => {
    console.log("food :" + food);
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
    //update list of food
    getFood();
  };

  //PUT|Edit
  const editFood = async (editedData, foodId) => {
    await fetch(URL + foodId, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    });
    getFood();
  };

  //DELETE|Remove
  const removeFood = async (removeId) => {
    await fetch(URL + removeId, {
      method: "delete",
    });
    getFood();
  };

  useEffect(() => {
    getFood();
  }, []); //fetch user data on page load (useEffect is needed otherwise the page will update infinitely)

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<DisplayFood food={food} createFood={createFood} />}
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/food/:id"
          element={
            food ? (
              <EditFood
                food={food}
                editFood={editFood}
                deleteFood={removeFood}
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
