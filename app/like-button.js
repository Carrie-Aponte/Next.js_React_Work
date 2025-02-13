"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  //the first item in the array is the state 'value', which we named 'likes' here.
  // second item in array is a function to update the value. named 'setLikes' here
  // we set the initial value of likes to 0 here.-->

  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
