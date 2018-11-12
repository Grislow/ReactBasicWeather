import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ForcastList from '../containers/forcast_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ForcastList />
      </div>
    );
  }
}
