import React, { useRef } from 'react';
import './Nav.css';
import { Icon } from './Icon';
import { NavBarLink } from './NavBarLink';
import { LanguageSwitch } from './LanguageSwitch';
import { useOutsideClick } from '../hooks/useOutsideClick';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const wrapperRef = useRef(null);
  const outsideClick = useOutsideClick(wrapperRef);

  React.useEffect(() => {
    if (open) {
      setOpen(!outsideClick.isOutside);
    }
  }, [outsideClick.isOutside]);

  return (
    <div className="mobile-nav-wrapper">
      <div className="logo">
        <Icon type="logo" />
      </div>
      <div className="mobile-nav-menu">
        <LanguageSwitch isMobile />
        <div
          className="logo"
          ref={wrapperRef}
          onClick={() => setOpen((p) => !p)}
        >
          <Icon type="bars" />
          <nav className={'mobile-nav ' + (open ? 'open' : '')}>
            <NavBarLink link="/">Home</NavBarLink>
            <NavBarLink link="/about">About Us</NavBarLink>
            <NavBarLink link="/wines">Wines</NavBarLink>
            <NavBarLink link="/story">Our Story</NavBarLink>
            <NavBarLink link="/contacts" isMobile>
              Contacts
            </NavBarLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <Icon type="logo" />
      </div>
      <nav className="nav">
        <NavBarLink link="/">Home</NavBarLink>
        <NavBarLink link="/about">About Us</NavBarLink>
        <NavBarLink link="/wines">Wines</NavBarLink>
        <NavBarLink link="/story">Our Story</NavBarLink>
        <NavBarLink link="/contacts">Contacts</NavBarLink>
        <LanguageSwitch />
      </nav>
    </div>
  );
}
