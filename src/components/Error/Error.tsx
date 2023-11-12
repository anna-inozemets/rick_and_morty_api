import React from 'react';
import { WarningFilled } from '@ant-design/icons';
import './Error.scss';

export const Error = () => (
  <article className="section section--error error">
    <p>Sorry, an error has occurred. Please try to reload the page <span><WarningFilled /></span></p>
  </article>
)
