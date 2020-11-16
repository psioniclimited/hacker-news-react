import axios from "axios";

export const baseUrl = " https://hacker-news.firebaseio.com/v0/";
export const newsStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
  const result = await axios.get(newsStoriesUrl).then(({ data }) => data);

  return result;
};
