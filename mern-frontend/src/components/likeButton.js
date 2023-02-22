import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LikeButton({ userLikes, origamiId, editOrigami }) {
  const [likes, setLikes] = useState(userLikes);
  const [likeAllowed, setLikeAllowed] = useState(true);

  console.log(likes);

  let currentLikes = userLikes;

  //const [newForm, setNewForm] = useState();

  const handleChange = (event) => {
    if (likeAllowed == false) {
      return;
    }
    //++currentLikes;
    currentLikes = currentLikes + 1;
    setLikes(currentLikes);
    console.log("TEST!! :" + currentLikes);
    const newFormValue = {
      likes: currentLikes,
    };
    editOrigami(newFormValue, origamiId);
    setLikeAllowed(false);
    //console.log(newForm)
  };

  const handleChangeDecrement = (event) => {
    if (likeAllowed == false) {
      return;
    }
    //++currentLikes;
    if (likes >= 1) {
      currentLikes = currentLikes - 1;
    }
    //currentLikes = currentLikes - 1;
    setLikes(currentLikes);
    console.log("TEST!! :" + currentLikes);
    const newFormValue = {
      likes: currentLikes,
    };
    editOrigami(newFormValue, origamiId);
    setLikeAllowed(false);
    //console.log(newForm)
  };

  let id = origamiId;
  console.log("origami id is :" + id);

  // if (sessionStorage.getItem("loggedInUser") != null) {
  //   id = sessionStorage.getItem(
  //     JSON.parse(sessionStorage.getItem("loggedInUser"))._id
  //   );
  // }

  const incrementLike = () => {
    if (likeAllowed == false) {
      return;
    }

    currentLikes++;
    //console.log(currentLikes);
    setLikes(currentLikes);
    setLikeAllowed(false);
    //console.log(likes);
    //console.log(currentLikes);
  };

  const decrementLike = () => {
    if (likeAllowed == false) {
      return;
    }

    if (likes >= 1) {
      currentLikes--;
      //setLikes(currentLikes);
      setLikes(currentLikes);
      setLikeAllowed(false);
    }
  };

  //   useEffect(() => {
  //     document.querySelector("p").innerText = `Likes :${likes}`;
  //   }, [likes]);

  return (
    <div>
      {/* <h1>Number of likes:</h1> */}
      <p>Current likes is :{likes}</p>
      <button onClick={handleChange}>Like</button>
      <button onClick={handleChangeDecrement}>Unlike</button>
      {/* <ThemedButton onClick={reset}>Reset</ThemedButton> */}
    </div>
  );
}