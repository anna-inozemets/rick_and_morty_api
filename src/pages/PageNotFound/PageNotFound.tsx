import React from 'react';
import './PageNotFound.scss';
import { RobotOutlined, HomeFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export const PageNotFound = () => (
  <article className="section section--not-found not-found">
    <p>Sorry, this page not found on our site <span><RobotOutlined /></span></p>
    <NavLink to={'/home'}>Home page <span><HomeFilled /></span></NavLink>
  </article>
)