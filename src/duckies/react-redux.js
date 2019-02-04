import React, {Component} from 'react';
import store from './store';

export default function connect(stateFn, dispatchObj) {
  return function(Comp) {
    return class Higher extends Component {
      constructor(props) {
        super(props);
        this.state = {
          propsToPass: stateFn(store.getState()),
          actionsToPass: {}
        }
      }
      componentDidMount() {
        store.subscribe(() => {
          this.setState({
            propsToPass: stateFn(store.getState())
          })
        })
        let newOne = {};
        for (let key in dispatchObj) {
          newOne[key] = (...args) => {
            store.dispatch(dispatchObj[key](...args))
          }
        }
        this.setState({
          actionsToPass: newOne
        })
      }
      render() {
        const props = { ...this.state.propsToPass, ...this.state.actionsToPass };
        return (
          <Comp {...props} />
        )
      }
    }
  }
  
  
}