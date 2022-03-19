import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarLink.css';

export function NavBarLink(props: {
  link?: string;
  children: any;
  isMobile?: boolean;
  onClick?: () => void;
}) {
  if (props.link) {
    return (
      <NavLink
        className={'nav-bar-link ' + (props.isMobile ? 'mobile' : '')}
        to={props.link ? props.link : ''}
        exact
      >
        {props.children}
      </NavLink>
    );
  } else {
    return (
      <div className={'nav-bar-link ' + (props.isMobile ? 'mobile' : '')}>
        {props.children}
      </div>
    );
  }
}
