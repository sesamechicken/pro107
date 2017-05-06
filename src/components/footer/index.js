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
    componentWillUpdate(nextProps, nextState) {
        //you'll see the changing state value in here
        console.log('Your state: ' + this.state.github);
    }
    // We need to fetch from GitHub, Twitter, and Blog
    componentDidMount() {
        let githubData = {};
        const fixupState = (data) => {
            this.setState({github: {data: data}});
        
        };
        // Fetch data
        fetch('https://api.github.com/users/sesamechicken/events?page=1&per_page=1')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            githubData = json[0].payload.commits[0];
            fixupState(githubData);
            // 
            // console.log('parsed json', json[0].payload.commits[0]);
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
        
    }
 
    render() {
        console.log('state: ', this.state)
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
