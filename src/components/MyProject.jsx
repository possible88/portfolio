import React from 'react';
import { useSpring, animated } from 'react-spring';
import Technologies from './Technologies';
import * as uuid from 'uuid';

function MyProject({ image, link, code, write_up, delay, technologies }) {
    function handleArray(theArray) {
        let myEl = [];
        for (var i = 0; i < theArray.length; i++) {
            myEl.push(<Technologies technologies={theArray[i]} key={uuid.v4()} />)
        }
        return myEl;
    }

    const props = useSpring({
        to: { opacity: 1, x: 0 },
        from: { opacity: 0, x: -500 },
        delay: delay,
    })

    return <animated.div style={props}>
        <div className="template">
            <div className="screenshot">
                <img src={image} alt="" />
            </div>
            <div className="details">
                <div className="redirect">
                    <a className='links' target="_blank" href={link} rel="noopener noreferrer">preview</a>
                    <a className='source' target="_blank" href={code} rel="noopener noreferrer">&#60;code&#47;&#62;</a>
                </div>
                <p>{write_up}</p>
                <hr />
                <div className="technologies">
                    <p>Technologies:</p>
                    {handleArray(technologies)}
                </div>
            </div>
        </div>
    </animated.div>
}

export default MyProject;
