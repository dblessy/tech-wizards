import React from "react";
import { deleteTweet } from "./App.utils";
import { Button } from "./Button";
//@author:pramatha
export const Tweet = ({ children,id }) => {
  return (
    <section>
      <div className="twitter-tweet">{children}</div>
      <Button onClick={() => deleteTweet(id)}>Delete Tweet</Button>
    </section>
  );
};
