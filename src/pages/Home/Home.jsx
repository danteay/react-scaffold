import React from 'react';
import Layout from './../../components/Layout';

import { useSession } from './../../hooks';

import './Home.sass';

const Home = props => {
  useSession(props.history);

  return (
    <Layout>
      <h1 className="title is-1">Hola mundo</h1>
    </Layout>
  );
};

export default Home;
