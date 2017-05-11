import React, { Component } from 'react';
import casualTime from 'casual-time';
import './blog.css';

class Blog extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const title = this.props.data.title;
    const date = casualTime(this.props.data.date);
    let post = this.props.data.content;
    post = post.substring(0, 100) + '...';
    return (
      <div className='wrapper'>
        <div className='col'>
          <a href='http://project107.net/blog' target='_blank'>
            <img src={require('../../images/wordpress.png')} alt='Wordpress' className='blog channel-icon' />
          </a>
        </div>
        <div className='col'></div>
        <div className='col'>
          <div className='blog-detail'>
            <h1>{title}</h1>
            <p> posted {date}</p>
            <p dangerouslySetInnerHTML={{__html: post}}></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;