// @flow
import React, { Component } from 'react';
import Wobble from 'react-wobble';
// import { Foo, Bar } from 'components'

class App extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <div>
        <p>
          <Wobble text={'YOLO ASWÉ'} />
        </p>
      </div>
    );
  }
}

export default App;
