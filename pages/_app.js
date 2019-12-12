import React from 'react';
import App, { Container } from 'next/app';
import Layout from 'antd/lib/layout'
//import Sider from '../components/Sider';
//import Header from '../components/Header';
import '../styles/style.css';

const { Content, Sider, Header } = Layout;

import 'antd/dist/antd.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <Container>
      //   <Layout style={{ minHeight: '100vh' }}>
      //     <Sider {...pageProps} />
      //     <Layout>
      //       <Header />
      //       <Content style={{ padding: 20 }}>
              <Component {...pageProps} />
      //       </Content>
      //     </Layout>
      //   </Layout>
      // </Container>
    );
  }
}

export default MyApp;
