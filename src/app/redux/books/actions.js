import { getBooks } from '../../../service/service';

export const actions = {
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS'
};

export const actionCreators = {
  getBooksSuccess(books) {
    return {
      type: actions.GET_BOOKS_SUCCESS,
      books
    };
  },
  loadBooks() {
    return async dispatch => {
      try {
        const response = await getBooks();
        dispatch(actionCreators.getBooksSuccess(response.data));
      } catch (e) {
        console.log(e);
      }
    };
  }
};
