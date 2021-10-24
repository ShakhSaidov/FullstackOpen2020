import axios from "axios";
import { getId } from "./randomizer";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addNew = async (anecdote) => {
  const obj = { content: anecdote, id: getId(), votes: 0 };
  const response = await axios.post(baseUrl, obj);
  return response.data;
};

const updateVote = async (anecdoteToUpdate) => {
  const newAnecdote = {
    ...anecdoteToUpdate,
    votes: anecdoteToUpdate.votes + 1,
  };

  const response = await axios.post(baseUrl, newAnecdote);
  console.log("response is: ", response)
  return response.data
};

export default { getAll, addNew, updateVote };
