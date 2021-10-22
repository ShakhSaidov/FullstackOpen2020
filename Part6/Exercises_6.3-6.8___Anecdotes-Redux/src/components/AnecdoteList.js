import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteUp } from "../reducers/anecdoteReducer";
import { voteMessage, emptyMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  anecdotes.sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const vote = (id, anecdote) => {
    dispatch(voteUp(id));
    dispatch(voteMessage(anecdote));
    setTimeout(() => {
      dispatch(emptyMessage());
    }, 5000);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote, index) => (
        <div key={anecdote.id} style={{ marginBottom: "10px" }}>
          <div>
            {index + 1}. {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
