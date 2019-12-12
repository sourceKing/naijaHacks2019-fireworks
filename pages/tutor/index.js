import React, { Component } from 'react';
import withLayout from '../../lib/withLayout';

class TutorIndex extends Component {
  render() {
    return (
      <h1>This is the tutor home dashboard.</h1>
    );
  }
}

export default withLayout(TutorIndex);