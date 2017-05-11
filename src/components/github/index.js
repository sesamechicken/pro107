import React, { Component } from 'react';
import casualTime from 'casual-time';
import './github.css';

class Github extends Component {
  constructor(props){
  super(props);
  }
  render() {
    const activityType = this.props.data.type === 'CreateEvent' ? 'Created repo' : 'Committed to';
    let userName = this.props.data.actor.display_login;
    let repoName = this.props.data.repo.name;
    let repoURL = this.props.data.repo.url.replace('api.', '').replace('repos/', '');

    return (
      <div className='wrapper'>
        <div className='col'>
          <a href='https://github.com/sesamechicken' target='_blank'>
            <img src={require('../../images/github.png')} alt='Github' className='github channel-icon' />
          </a>
        </div>
        <div className='col'></div>
        <div className='col'>
          <div className='github-detail'>
            <a href='https://github.com/sesamechicken' target='_blank'>
              <img className='github-avatar' src={`${this.props.data.actor.avatar_url}`} alt={`${this.props.data.actor.login}`} />
            </a>
            <span className='github-username'>{userName}</span>
            <p>{activityType} <a href={repoURL} target='_blank'>{repoName}</a> <br /><span className='github-timestamp'>{casualTime(this.props.data.created_at)}</span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Github;