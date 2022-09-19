import React from "react";
import "./App.css";
import { postTweet, retrieveTweet } from "./App.utils";
import { Button } from "./Button";
import { Tweet } from "./Tweet";
//@author:Rishikesh
const App = () => {
  const [tweets, setTweets] = React.useState(null);
  const tweetArea = React.useRef(null);
  const tweetPostHandler = () => {
    if (tweetArea.current) {
      postTweet(tweetArea.current.value);
    }
  };
  //@author:Pramatha
  return (
    <div className="twitter-main">
      <header>
        <h1>Twitter App</h1>
      </header>
      <section>
        <section>
          <h3>Your recent tweets:</h3>
          {tweets ? (
            tweets.map((tweet) => <Tweet id={tweet.id}>{tweet.text}</Tweet>)
          ) : (
            <p>Click on Retrieve Tweet Button to view your tweets</p>
          )}
          <Button
            onClick={() => retrieveTweet(setTweets)}
            style={{ width: "100%" }}
          >
            Retrieve recent tweets
          </Button>
        </section>
        <section>
          <div>
            <textarea
              cols={40}
              rows={5}
              type="text"
              placeholder="Enter tweet"
              className="twitter-textarea"
              ref={tweetArea}
            />
          </div>
          <Button onClick={tweetPostHandler}>Post Tweet</Button>
        </section>
      </section>
    </div>
  );
};

export default App;
