import React from "react";
import { addNew } from "../reducers/anecdoteReducer";
import { addMessage, emptyMessage } from "../reducers/notificationReducer";
import { useDispatch } from "react-redux";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    const newAnecdote = await anecdoteService.addNew(content)
    console.log("new is: ", newAnecdote)
    dispatch(addNew(newAnecdote));
    dispatch(addMessage(newAnecdote));
    setTimeout(() => {
      dispatch(emptyMessage());
    }, 5000);
  };

  return (
    <div>
      <h2>Add new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
