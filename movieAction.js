import axios from 'axios';
import { options } from '../../utils/contants';
import { actionTypes } from './actionTypes';

// temel api url
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//! Asenkron Aksiyon
// hem verileri çeksin hem reducer'a aktarsın
export const getMovies = () => (dispatch) => {
  // asenkron işlemler
  axios
    .get('/movie/popular', options)
    // gelen veriyi reducer'a aktar
    .then((res) =>
      dispatch({
        type: actionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    );
};

// kategorileri verilerini çek ve store'a aktar
export const getGenres = () => (dispatch) => {
  axios
    .get('/genre/movie/list?language=tr', options)
    // reducer'a gönderme
    .then((res) =>
      dispatch({
        type: actionTypes.SET_CATEGORIES,
        payload: res.data.genres,
      })
    );
};