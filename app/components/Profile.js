var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
  getInitialState: function () {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'John Doe'
      },
      repos: ['a', 'b', 'c']
    }
  },

  render: function () {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
          Repos Component
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
          Notes Component
        </div>
      </div>
    )
  }
});

module.exports = Profile;