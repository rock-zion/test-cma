import * as Types from '../types'

let initialState = {
  users: [],
  user: {}
}

export const getUsers = (state = initialState, action) => {
  switch(action.type){
    case Types.USERS:
      return{
        ...state,
        users: action.payload
      }
    default:
      return{
        ...state
      }
  }
}

export const getUser = (state = initialState, action) => {
  switch(action.type){
    case Types.USER:
      return{
        ...state,
        user: action.payload
      }
    default:
      return{
        ...state
      }
  }
}