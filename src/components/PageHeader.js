import React from 'react';

import classes from '../styles/PageHeader.module.css';

const PageHeader = (props) => (
  <div className={classes.PageHeader}>
    <div className={classes.LogoContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt='Lunch house Logo'/>
    </div>
  </div>
);

export default PageHeader;
