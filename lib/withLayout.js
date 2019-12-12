import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Sider from '../components/Sider';
import Navigation from '../components/Navigation';

const { Content, Header } = Layout;

function withLayout(BaseComponent) {
  class App extends Component {
    
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider />
          <Layout>
            <Header />
            <Content style={{ padding: 20 }}>
              <BaseComponent />
            </Content>
          </Layout>
        </Layout>
      );
    }
  
  }

  App.getInitialProps = (ctx) => {
    if(BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  }

  return App;
}

export default withLayout;