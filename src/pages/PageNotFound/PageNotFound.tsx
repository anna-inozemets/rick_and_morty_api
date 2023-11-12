import React from 'react';
import './PageNotFound.scss';
import { RobotOutlined, HomeFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export const PageNotFound = () => (
  <article className="section section--not-found not-found">
    <div className="container">
      <div className="not-found__content">
        <p>Sorry, this page not found on our site <span><RobotOutlined /></span></p>
        <NavLink to={'/home'}>Home page <span><HomeFilled /></span></NavLink>
      </div>
    </div>
  </article>
)
