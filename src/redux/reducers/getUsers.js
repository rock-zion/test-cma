import * as Types from '../types'

let initialState = {
  users: []
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