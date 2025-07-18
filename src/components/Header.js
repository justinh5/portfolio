import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faDribbble,
  faMediumM,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <FontAwesomeIcon icon={faAnchor} size="2x" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Justin Scott Haupt</h1>
        <h2>Portland, OR</h2>
        <p>
          Software Engineer
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/justinh5" title="Github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/justinhaupt/" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/justinh5" title="Dribbble">
            <FontAwesomeIcon icon={faDribbble} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@jhaupt100" title="Medium">
            <FontAwesomeIcon icon={faMediumM} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/justinh5" title="Codepen">
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </li>
        <li>
          <a href="mailto:jhaupt100@gmail.com" title="Contact">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  timeout: PropTypes.bool,
};

export default Header;
