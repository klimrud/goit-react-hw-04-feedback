import React from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>

      {children}
    </section>
  );
};

Section.propType = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
