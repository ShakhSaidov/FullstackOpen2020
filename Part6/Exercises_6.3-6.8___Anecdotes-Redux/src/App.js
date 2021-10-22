import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNew, voteUp } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);

  anecdotes.sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const vote = (id) => dispatch(voteUp(id));

  const addAnecdote = (event) => {
    event.preventDefault();
    const newAnecdote = event.target.anecdote.value;
    dispatch(addNew(newAnecdote));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote, index) => (
        <div key={anecdote.id} style={{marginBottom: '10px'}}>
          <div>
            {index + 1}. {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App;
