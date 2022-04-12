import React, { useEffect } from "react";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { useSpring, animated } from "react-spring";

export const HireMe = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'rotateX(0deg)' },
    from: { opacity: 0, transform: 'rotateX(-90deg)' },
    delay: 500,
    config: { tension: 100 },
  });

  useEffect(() => {
    document.title = "Contact";
  },[]);

  return (
    <animated.div style={props}>
      <div className="contact">
      <div className="topic">
        <h2>Have a job for me?</h2>
      </div>
      <div className="contact-form">
        <form name="contact" method="POST" data-netlify="true">
          <div className="input">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              autoCapitalize="on"
            />
            <input type="email" name="email" required placeholder="Email" />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="button">
            <button className="contact-border" type="submit">Submit</button>
          </div>
        </form>
        <hr />
        <div className="email">
          <p>
            <MarkEmailUnreadIcon />
          </p>
          <a href="mailto:ernestpossible@gmail.com">
            ernestpossible@gmail.com
          </a>
        </div>
      </div>
    </div>
    </animated.div>
  );
};
