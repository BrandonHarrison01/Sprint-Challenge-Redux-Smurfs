import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurfs } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  };

  addSmurfs = e => {
    e.preventDefault();
    this.props.addSmurfs(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    if (this.props.fetchingSmurfs) {
      <h2>fetching smurfs...</h2>
    }
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <h2>name: {smurf.name} age: {smurf.age}</h2>
              <h2>height:{smurf.height}</h2>
            </div>
          )
        })}
        <div>
          <input
            placeholder='Name'
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            placeholder='Age'
            type='text'
            name='age'
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            placeholder='height'
            type='text'
            name='height'
            value={this.state.height}
            onChange={this.handleChanges}
          />
          <button onClick={this.addSmurfs}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurfs}
)(App);
