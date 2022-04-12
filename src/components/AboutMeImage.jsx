import React from 'react';
import profile from "../skills/fullimage.jpg";
import { animated, useTransition } from 'react-spring';

const AboutMeImage = () => {
    const show = true;
    const transitions = useTransition(show, {
        from: { opacity: 0, x: -500 },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: -500 },
        reverse: show,
        delay: 200,
        config: { duration: 1000 }
    })

    return transitions(
        (styles, item) => item && <animated.div style={styles}>
            <div className='full-image'>
                <img src={profile} alt="" />
            </div>
        </animated.div>
    )


}

export default AboutMeImage;
