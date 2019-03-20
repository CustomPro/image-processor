import * as React from 'react';
import DataFetch from '@containers/demos/data-fetch';
import { Header, Content, Footer, Demo } from '@components/shared';
import { Container, DemoList } from './ui';

const Home = () => (
  <Container>
    <Header title="Test" subtitle="A React.js project to process images" />

    <Content>
      <DemoList>
        <Demo label={'Data Fetch'}>
          <DataFetch />
        </Demo>
        <Demo label={'PNG'}>
          <img src={require('@assets/images/demo.jpg')} />
        </Demo>
      </DemoList>
    </Content>

    <Footer />
  </Container>
);

export default Home;
