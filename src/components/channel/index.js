import React, { Component } from 'react';
import './channel.css';
import Github from '../github';
import Blog from '../blog';

class Channel extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: '',
            data: {}
        }
    } 
    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);
        this.setState({ class: nextProps.class, data: nextProps.data});
    }
    
    render (){
        let channelComponent = '';
        switch(this.state.class){
            case 'github':
                channelComponent = <Github {...this.state} />;
            break;
            case 'blog':
                console.log('passed props to blog: ', this.state)
                channelComponent = <Blog {...this.state} />;
            break;
            default:
            channelComponent = <div></div>
        }
      return (
            <div className={`channel ${this.state.class}`}>
                <div>{channelComponent}</div>
            </div>
        );
    }
};

export default Channel;
