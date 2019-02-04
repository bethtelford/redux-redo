const initialState = {
  message: 'something'
}

const NEW_MESSAGE = 'NEW_MESSAGE';

export default function reducer(state = initialState, action) {
  let {type, payload} = action;
  console.log('reducer', action)
  switch(type) {
    case NEW_MESSAGE:
      return {...state, message: payload}
    default: 
      return state
  }
}

export function changeMessage(str) {
  console.log('action', str)
  return {
    type: NEW_MESSAGE,
    payload: str
  }
}