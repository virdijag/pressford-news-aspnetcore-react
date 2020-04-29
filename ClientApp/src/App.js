import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Articles  from './components/Article/Articles'
import { Create } from './components/Article/Create'
import { Update } from './components/Article/Update'
import { Delete } from './components/Article/Delete'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />  
        <Route path='/articles' component={Articles} /> 
        <Route path='/update/:id' component={Update} />     
        <Route path='/delete/:id' component={Delete} />     
      </Layout>
    );
  }
}
