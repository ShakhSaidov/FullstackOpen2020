const notificationReducer = (state, action) => {
  switch (action.type) {
    case "VOTE_MESSAGE": {
      return "you voted '" + action.data.anecdote + "'";
    }

    case "ADD_MESSAGE": {
      return "you added '" + action.data.anecdote + "'";
    }

    case "EMPTY_MESSAGE": {
        return "";
    }

    default: {
      return "";
    }
  }
};

export const addMessage = (anecdote) => {
  return {
    type: "ADD_MESSAGE",
    data: { anecdote }
  };
};

export const voteMessage = (anecdote) => {
    return {
      type: "VOTE_MESSAGE",
      data: { anecdote }
    };
  };

export const emptyMessage = () => {
    return {
        type: "EMPTY_MESSAGE"
    }
}

export default notificationReducer;
