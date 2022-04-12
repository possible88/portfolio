import React from 'react';
import { animated, useSpring } from "react-spring";

const AboutMeText = () => {
    const heading = useSpring({
        loop: false,
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {duration: 700, tension: 100},
        delay: 1500
      })
    return <div className='my-describtion'>
        <div className="text">
            <animated.div style={heading}>
                <p>
                    Hello my name is Ernest a React Js developer with knowledge of Node Js, PHP, GO
                    and other programming languages/frameworks, i am result oriented and possess a very strong 
                    problem solving skill. <br /> <br />

                    I have work with various startups to build a web application from scratch, i have proven 
                    ability to work on my own with minimal or no supervision and to always deliver result within a 
                    given time frame. <br /> <br />

                    I am open to opportunities all over the world that would help advanced my career and also willing to learn more 
                    frameworks and programming languages if required, i learn very fast and also committed to improving my stills in 
                    all ramification, if you have any job you would like me to be on, please don't hesitate to reach out to me 
                    thanks.
                </p>
            </animated.div>
        </div>
        <div className="call-to-action"></div>

    </div>
}

export default AboutMeText;
