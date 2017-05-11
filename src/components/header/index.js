import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <div className='header wrapper'>
            <div className='row'>
                <div className='col'><img className='header-icon' src={require('../../images/html5-badge.png')} alt='html5' /></div>
                <div className='col'><img className='header-icon' src={require('../../images/css3-badge.png')} alt='css3' /></div>
                <div className='col'><img className='header-icon' src={require('../../images/angular-badge.png')} alt='angular' /></div>
            </div>
            <div className='row'>
                <div className='col'><img className='header-icon' src={require('../../images/js-badge.png')} alt='javascript' /></div>
                <div className='col'><img className='header-icon' src={require('../../images/react-badge.png')} alt='react' /></div>
                <div className='col'><img className='header-icon' src={require('../../images/node-badge.png')} alt='node' /></div>
            </div>
            
            
            
            
            
            
        </div>
    );
}

export default Header;