import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarLink.css';

export function NavBarLink(props: {
  link: string;
  children: any;
  isMobile?: boolean;
}) {
  return (
    <NavLink
      className={'nav-bar-link ' + (props.isMobile ? 'mobile' : '')}
      to={props.link}
      exact
    >
      {props.children}
    </NavLink>
  );
}
