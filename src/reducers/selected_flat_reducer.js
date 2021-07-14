const selectedFlatReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'SELECT_FLAT') {
    return action.payload;
  // eslint-disable-next-line no-else-return
  } else {
    return state;
  }
};


export default selectedFlatReducer;
