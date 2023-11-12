import React from 'react';
import { Spin } from 'antd';
import './Loader.scss';

export const Loader = () => (
  <article className="section section--loader loader">
    <Spin size="large" />
  </article>
)
