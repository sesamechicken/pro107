import React, { Component } from 'react';
import './github.css';

class Github extends Component {
  constructor(props){
  console.log('github state', props);
  super(props);
  }
  render() {
    console.log(this.props);
    const activityType = this.props.data.type === 'CreateEvent' ? 'Created repo' : 'Committed to';
    let userName = this.props.data.actor.display_login;
    let repoName = this.props.data.repo.name;
    let repoURL = this.props.data.repo.url.replace('api.', '').replace('repos/', '');

    return (
      <div>
        <img src={require('../../images/github.png')} alt={`${this.props.class}`} className={`${this.props.class}` + ' channel-icon'} />
        <div className='github-detail'>
          <img className='github-avatar' src={`${this.props.data.actor.avatar_url}`} alt={`${this.props.data.actor.login}`} />
          <span>{userName}</span>
          <p>Last activity: {activityType} {this.props.data.created_at}</p>
          <p>repo: <a href={repoURL}>{repoName}</a></p>
        </div>
      </div>
    );
  }
}

export default Github;