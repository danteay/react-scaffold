import React, { Component } from 'react'
import Layout from './../../components/Layout'

import './Home.sass'

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="title is-1">Hola mundo</h1>
      </Layout>
    )
  }
}