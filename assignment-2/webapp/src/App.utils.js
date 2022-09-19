//@author:Rishikesh
import axios from "axios";
import { USERID } from "./secrets";

export const retrieveTweet = (setTweets) => {
  const fetchTweet = async () => {
    const result = await axios.get("/RecentTweets/" + USERID);
    const tweetsArray = result.data.data;
    setTweets(tweetsArray);
  };
  fetchTweet();
};

export const postTweet = (value) => {
  axios.post("/Tweet",{text:`${value}`});
};

export const deleteTweet = (id) => {
  axios.delete(`/Tweet/${id}`)
};
