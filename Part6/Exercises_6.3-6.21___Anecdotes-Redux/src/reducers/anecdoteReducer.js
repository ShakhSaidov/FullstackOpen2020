import { getId } from "../services/randomizer";
import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.data];
    }

    case "VOTE": {
      const id = action.data.id;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };

      return state.map((n) => (n.id !== id ? n : changedAnecdote));
    }

    case "INIT":
      return action.data;

    default:
      return state;
  }
};

export const addNew = (newAnecdote) => {
  return async (dispatch) => {
    const data = await anecdoteService.addNew(newAnecdote);
    dispatch({
      type: "ADD",
      data,
    });
  };
};

export const voteUp = (anecdote) => {
  return async (dispatch) => {
    const id = anecdote.id
    const data = await anecdoteService.updateVote(anecdote);
    console.log("data is: ", data)
    dispatch({
      type: "VOTE",
      data: { id },
    });
  };
};

export const initalizeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT",
      data: anecdotes,
    });
  };
};

export default anecdoteReducer;
