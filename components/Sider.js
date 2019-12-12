import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Link from 'next/link';

import Nav from './Navigation';

const { Sider } = Layout;


class MySider extends Component {
  
  state = {
    collapsed: false
  };

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        style={{
          width: 'auto',
          height: 'inherit',
          display: 'fixed',
          // flexFlow: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // padding: '0px 120px 0px 120px'
      }}>
        <Link href="/" passHref prefetch>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            // fontSize: 23,
            // width: '120px',
            height: '32px',
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '16px',
            // float: 'left',
            textAlign: 'center'
          }}>Fireworks</div>
        </Link>
        {/* <Search /> */}
        <Nav />
      </Sider>
    )
  }
}

export default MySider;