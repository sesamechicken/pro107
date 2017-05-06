import React from 'react';
import './channel.css';

const Channel = (props) => {
    console.log(props);
      return (
            <div className={'channel ' + `${props.class}`}>
                <img src={'assets/' + `${props.class}` + '.png'} alt={`${props.class}` + ' icon'} />
                <p>I'm a channel {props.class}</p>
            </div>
        );
}

export default Channel;