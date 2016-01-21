/* global ReactMeteorData */
import React, {Component} from 'react';
import reactMixin from 'react-mixin';
import {Users, Posts} from 'collections';
import './App.css';

Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

if (Meteor.isServer) {
}

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  getMeteorData() {
    return {
      users: Users.find().fetch()
    };
  }

  render() {
    let userCount = Users.find().fetch().length;
    let postsCount = Posts.find().fetch().length;
    return (
      <div className="App">
        <h1>Hello Webpack!</h1>
        <p>There are {userCount} users in the Minimongo  (login to change)</p>
        <p>There are {postsCount} posts in the Minimongo  (autopublish removed)</p>
      </div>
    );
  }
}
