import React, { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/hnApi";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};
