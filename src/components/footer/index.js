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
        let githubData = {};
        const fixupState = (data, component) => {
            switch(component){
                case 'github':
                    this.setState({github: {class: 'github', data: data}});
                    break;
                case 'twitter':
                    this.setState({twitter: {class: 'github', data: data}});
                    break;
                case 'blog':
                    this.setState({blog: {class: 'github', data: data}});
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
            githubData = json[0];
            fixupState(githubData, 'github');
            // 
            // console.log('parsed json', json[0].payload.commits[0]);
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
