import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children, cool }) => (
  <div>
    <h2>I am the page component</h2>
    <h3>{cool}</h3>
    {children}
  </div>
);

export default Page;

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
