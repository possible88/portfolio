import React from "react";
import "animate.css/animate.min.css";
import LightSpeed from 'react-reveal/LightSpeed';
import Spin from "react-reveal/Spin";
import { useSpring, animated } from "react-spring";
import js from "../skills/js.webp";
import html from "../skills/html.png";
import css from "../skills/css.svg";
import sql from "../skills/sql.webp";
import mongo from "../skills/mongo.webp";
import node from "../skills/node.webp";
import boostrap from "../skills/boostrap.webp";
import react from "../skills/react.webp";
import redux from "../skills/redux.png";
import php from "../skills/php.png";
import sass from "../skills/sass.png";
import seo from "../skills/seo.png";
import mui from "../skills/mui.png";
import go from "../skills/go.png";

const Skill = () => {
  const heading = useSpring({
    loop: false,
    from: { opacity: 0, fontSize: "4rem" },
    to: { opacity: 1, fontSize: "1rem" },
    config: { duration: 500, tension: 100 },
    delay: 300,
  });
  return (
    <div className="skill">
      <animated.div style={heading}>
        <h1>My Skills</h1>
      </animated.div>
      <div className="skill-images">
      <Spin>
          <div className="html">
            <img src={go} alt="" />
          </div>
        </Spin>
        <Spin>
          <div className="html">
            <img src={html} alt="" />
          </div>
        </Spin>
        <Spin>
          <div className="css">
            <img src={css} alt="" />
          </div>
        </Spin>
        <Spin>
          <div className="sass">
            <img src={sass} alt="" />
          </div>
        </Spin>
        <Spin>
          <div className="boostrap">
            <img src={boostrap} alt="" />
          </div>
        </Spin>
        <LightSpeed left>
          <div className="js">
            <img src={js} alt="" />
          </div>
        </LightSpeed>
        <LightSpeed left>
          <div className="react">
            <img src={react} alt="" />
          </div>
        </LightSpeed>
        <LightSpeed left>
          <div className="redux">
            <img src={redux} alt="" />
          </div>
        </LightSpeed>
        <LightSpeed right>
          <div className="mui">
            <img src={mui} alt="" />
          </div>
        </LightSpeed>
        <LightSpeed right>
          <div className="node">
            <img src={node} alt="" />
          </div>
        </LightSpeed>
        <Spin>
          <div className="mongo">
            <img src={mongo} alt="" />
          </div>
        </Spin>
        <Spin>
          <div className="sql">
            <img src={sql} alt="" />
          </div>
        </Spin>
        <Spin>
          <div className="php">
            <img src={php} alt="" />
          </div>
        </Spin>
        <Spin>
          <div className="seo">
            <img src={seo} alt="" />
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default Skill;
