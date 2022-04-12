import React from 'react';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSpring, animated } from 'react-spring';

const HomeText = () => {

    const props = useSpring({
        to: { opacity: 1, x: 0 },
        from: { opacity: 0, x: -500 },
        delay: 200,
    })
    const linkedin = () => {
        window.open('https://www.linkedin.com/in/possible-chibuike-ernest-12627912b/', '_blank');
    }
    const twitter = () => {
        window.open('https://twitter.com/Chyke_88', '_blank');
    }
    const git = () => {
        window.open('https://github.com/possible88', '_blank');
    }
    return (
        <animated.h1 style={props}>
            <div className='my-details'>
                <div className="icons">
                    <LinkedInIcon style={iconStyle} onClick={linkedin}/>
                    <TwitterIcon style={iconStyle} onClick={twitter}/>
                    <GitHubIcon style={iconStyle} onClick={git}/>
                </div>
                <div className="name">
                    <h2>Hello,</h2>
                    <h1>I am <span>Ernest</span></h1>
                    <p>I am a backend developer (Golang) with knowledge in various other Languages/framework</p>
                    <Link className='btn draw-border' to="/my-projects">VIEW MY WORK</Link>
                </div>
            </div>
        </animated.h1>
    )
}
const iconStyle = {
    margin: "1rem 0"
}

export default HomeText
