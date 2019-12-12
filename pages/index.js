import React, { Component } from 'react';
import { withRouter } from 'next/router';
import withLayout from '../lib/withLayout';

// import lib/API
import { getCourses } from '../lib/api/public';

class Index extends Component {

  static async getInitialProps({ req }) {
    const res = await getCourses();
    console.log("API RESPONSE", res);

    return { res };
  }

  constructor(props) {
    super(props);
  }

  render() {
    // console.log("These are the props", this.props);
    return (
      <>
        <h1>This is the index page</h1>
        <h1>courses###</h1>
      </>
    )
  }
}

export default withRouter(withLayout(Index));