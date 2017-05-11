import React from 'react';
import './main.css'

export const Main = (props) =>{
    return (
        <div className='main-content wrapper'>
            <div>
                <h1>A Cincinnati based front end dev doing front-endy things.</h1>
                <p>Hi. I entered the web field as a web designer and Flash designer/developer. I know how designers and creative departments think, and I know what they want. My goal is to bridge the gap between beautiful aesthetics and solid, snappy UI's.</p>
                <p>My focus lately has been on front-end js frameworks and creating fast SPA's. I also really enjoy maximizing site and page performance and minimizing load times and overall payload. I've become slightly obsessed with analytical data, too.</p>
                <p>If you're looking for a developer to help make attractive and useful web sites and web apps (or put out some fires), give me a buzz.</p>
                <p className="text-center"><code>chris at project107 dot net</code></p>
            </div>
        </div>
    )
};

export default Main;