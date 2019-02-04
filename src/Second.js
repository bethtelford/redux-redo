import React, { Component } from "react";
import store from './duckies/store';

class Second extends Component {
  state = {
    store: store.getState()
  };
  componentDidMount(){
    store.subscribe(()=> {
      this.setState({
        store: store.getState()
      })
    })
  }

  render() {
    return <div className="Second">
        <h1>{this.state.store.message}</h1>
        <input onChange={e=>store.dispatch({type: 'NEW_MESSAGE', payload: e.target.value})}/>
      </div>;
  }
}

export default Second;
