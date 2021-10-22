import { getId } from "../services/randomizer";

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

    case "INIT": return action.data

    default:
      return state;
  }
};

export const addNew = (data) => {
  return {
    type: "ADD",
    data
  };
};

export const voteUp = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

export const initalizeAnecdotes = anecdotes => {
  return {
    type: "INIT",
    data: anecdotes
  }
}

export default anecdoteReducer
