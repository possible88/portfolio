import React, { useEffect } from 'react';
import projectData from './projectData';
import { useSpring, animated } from 'react-spring';
import MyProject from './MyProject';
import LightSpeed from 'react-reveal/LightSpeed';


const Project = () => {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "My projects";
  },[]);
  const heading = useSpring({
    loop: false,
    from: { opacity: 0, fontSize: "30px" },
    to: { opacity: 1, fontSize: "20px" },
    config: { duration: 500, tension: 100 },
    delay: 200
  })
  return <div className='my-projects'>
    <animated.div style={heading}>
      <h1>My Projects</h1>
    </animated.div>
    {projectData.map((item, i) => (
      <LightSpeed left>
      <MyProject image={item.image} link={item.link} code={item.code} write_up={item.write_up} delay={item.delay} technologies={item.technologies} key={i}/>
      </LightSpeed>
    ))}
  </div>
}

export default Project;
