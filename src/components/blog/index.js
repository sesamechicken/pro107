import React, { Component } from 'react';
import './blog.css';

class Blog extends Component {
  render() {
    return (
      <div>
        <img src={require('../../images/wordpress.png')} alt='Blog' className='blog channel-icon' />
        <div className='blog-detail'>

        </div>
      </div>
    );
  }
}

export default Blog;