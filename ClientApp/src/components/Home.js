import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Pressford News</h1>
        <p>Admin Manager:</p>
        <ul>
          <li>Add a new article</li>
          <li>Update a article</li>
          <li>Delete a article</li>
          <li>Show all articles</li>
        </ul>        
      </div>
    );
  }
}
