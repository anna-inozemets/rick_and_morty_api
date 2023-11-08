import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import IncodeLogo from '../../images/logo--incode.svg';
import { GithubFilled, TwitterOutlined, HeartFilled } from '@ant-design/icons';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer__description">performed as part of a test <br /> case for the company</p>
      <Link to="https://www.incode-group.com/" target="_blank" className="footer__incode-link">
        <img src={IncodeLogo} alt="Incode Group" />
      </Link>
      <div className="footer__icons">
        <Link to="https://github.com/incodellc" target="_blank">
          <GithubFilled className='footer__icons__item' />
        </Link>
        <Link
          to="https://twitter.com/incode_group?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
        >
          <TwitterOutlined className='footer__icons__item' />
        </Link>
        <Link to="https://www.instagram.com/incode_group/" target="_blank">
          <HeartFilled className='footer__icons__item' />
        </Link>
      </div>
      <p className="footer__year">2023</p>
    </div>
  </footer>
);
