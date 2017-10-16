import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Fonts.module.css';

const Fonts = () => (
  <div styleName="base">
    <p>
      This font is <i>Cousine</i> loaded from Google Fonts.
    </p>
    <ul>
      <li>
        <p>This is the regular weight.</p>
      </li>
      <li>
        <p>
          <b>This is the bold weight.</b>
        </p>
      </li>
      <li>
        <p>
          <i>This is the regular weight in italics.</i>
        </p>
      </li>
      <li>
        <p>
          <b>
            <i>This is the bold weight in italics.</i>
          </b>
        </p>
      </li>
    </ul>
  </div>
);

Fonts.propTypes = {
  // className: React.PropTypes.string.isRequired,
};

export default CSSModules(Fonts, styles);
