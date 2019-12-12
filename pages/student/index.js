import React, { Component } from 'react';
import withLayout from '../../lib/withLayout';

class StudentIndex extends Component {
  render() {
    return (
      <h1>This is the student home dashboard.</h1>
    )
  }
}

export default withLayout(StudentIndex);