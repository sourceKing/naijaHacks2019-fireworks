import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Link from 'next/link';
import Router from 'next/router';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '/dashboard'
    }
  }

  componentDidMount() {
    // console.log("The current path", Router.pathname);
    this.setState({ path: Router.pathname });
  }

  render() {
    
    return (
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[this.state.path]}
        selectedKeys={[this.state.path]}
        style={{
          height: 'auto'
        }}
        onSelect={
          ({item, key, selected}) => {
            this.setState({ path: key });
            Router.push(key);
            // Router.prefetch(key);
          }
        }
      >
        <Menu.Item key="/dashboard">
          <Icon type="home" style={{ color: 'white' }} />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="/schedule">
          <Icon type="clock-circle" style={{ color: 'white' }} />
          <span>Schedule</span>
        </Menu.Item>
        <Menu.Item key="/fireworks">
          {/* Add a custom fireworks icon */}
          <Icon type="star" style={{ color: 'white' }} />
          <span>Fireworks</span>
        </Menu.Item>
        <Menu.Item key="/upgrade">
          <Icon type="arrow-up" style={{ color: 'white' }} />
          <span>Account</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav;