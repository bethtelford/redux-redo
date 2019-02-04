export default function createStore(reducer) {
  let state = reducer(undefined, {type: 'Initial'});
  let listeners = [];

  function getState(){
    return state
  }
  function subscribe(cb){
    listeners.push(cb);
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener())
  }
  return {
    getState,
    subscribe,
    dispatch
  }
}
