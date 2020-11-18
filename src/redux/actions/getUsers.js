import API from './index';
import * as Types from '../types';

export const getUser = () => {
  return (dispatch) => {
    API({
      method: 'GET',
      url: 'users',
    })
      .then((res) => {
        console.log('response =>',res)
        dispatch({
          type: Types.USERS,
          payload: res.data
        })
      })
      .catch((error) => {
        console.log(error)
      });
  };
};
