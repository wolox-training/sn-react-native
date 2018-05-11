export const actions = {
  SET_FILTER: 'SET_FILTER'
};

export const actionCreators = {
  setFilter(filter) {
    return {
      type: actions.SET_FILTER,
      filter
    };
  }
};
