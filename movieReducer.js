import { actionTypes } from '../actions/actionTypes';

const initialState = {
  popularMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // popüler filmleri
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        isLoading: false,
      };

    // kategorileri state'e aktarma
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};