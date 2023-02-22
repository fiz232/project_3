import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LikeButton({ userLikes, origamiId, editOrigami }) {
  const [likes, setLikes] = useState(userLikes);
  const [likeAllowed, setLikeAllowed] = useState(true);

  console.log(likes);

  let currentLikes = userLikes;

  const [newForm, setNewForm] = useState({
    likes: likes,
  });

  // useEffect(() => {
  //   console.log(likes);
  //   handleSubmitLike();
  // }, [newForm]);

  let id = origamiId;
  console.log("origami id is :" + id);

  //console.log("origami is :" origami);

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
      <button onClick={incrementLike}>Like</button>
      <button onClick={decrementLike}>Unlike</button>
      {/* <ThemedButton onClick={reset}>Reset</ThemedButton> */}
    </div>
  );
}
