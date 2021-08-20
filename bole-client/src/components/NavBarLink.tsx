import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarLink.css';

export function NavBarLink(props: { link: string; children: any }) {
  return (
    <NavLink className="nav-bar-link" to={props.link} exact>
      {props.children}
    </NavLink>
  );
}
