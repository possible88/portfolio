import React, { useEffect } from 'react';
import AboutMeImage from './AboutMeImage';
import AboutMeText from './AboutMeText';
import { animated, useSpring } from "react-spring";

const About = () => {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = "About Me";
      },[]);
    const heading = useSpring({
        loop: false,
        from: { opacity: 0, rotate: 0 },
        to: { opacity: 1, rotate: 720 },
        config: { tension: 100 },
        delay: 300
    })
    return <div className="aboutme">
        <animated.div style={heading}>
            <h1>About Me</h1>
        </animated.div>
        <div className='about-me'>
            <AboutMeImage />
            <AboutMeText />
        </div>
    </div>
}

export default About;
