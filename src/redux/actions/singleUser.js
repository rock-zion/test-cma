import API from './index';
import * as Types from '../types';

export const singleUser = (data) => {
  return (dispatch) => {
    API({
      method: 'GET',
      url: `/users/${data}`
    })
      .then((res) => {
        console.log('response =>',res)
        dispatch({
          type: Types.USER,
          payload: res.data
        })
      })
      .catch((error) => {
        console.log(error)
      });
  };
};
