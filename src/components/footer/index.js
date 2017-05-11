import React, { Component } from 'react';
import Channel from '../channel'
import 'whatwg-fetch'
import './footer.css'


class Footer extends Component {
    constructor() {
    super();
    this.state = {
        twitter: {
            class: 'twitter',
            data: {}
        },
        github: {
            class: 'github',
            data: {}
        },
        blog: {
            class: 'blog',
            data: {}
        }
        };
    }
    // We need to fetch from GitHub, Twitter, and Blog
    componentDidMount() {
        let data = {};
        const fixupState = (data, component) => {
            switch(component){
                case 'github':
                    this.setState({github: {class: 'github', data: data}});
                    break;
                case 'twitter':
                    this.setState({twitter: {class: 'twitter', data: data}});
                    break;
                case 'blog':
                    this.setState({blog: {class: 'blog', data: data}});
                    break;
                default:
                break;
            }
            
        };
        // Fetch data
        fetch('https://api.github.com/users/sesamechicken/events?page=1&per_page=1')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            data = json[0];
            fixupState(data, 'github');
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });

        fetch('http://project107.net/blog/feed/json')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            data = json[0];
            console.log(json)
            fixupState(data, 'blog');
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
        
    }
 
    render() {
        return (
            <div className='footer-wrapper'>
                <Channel {...this.state.twitter} />
                <Channel {...this.state.github} />
                <Channel {...this.state.blog} />
            </div>
        );
    }
}
export default Footer;
