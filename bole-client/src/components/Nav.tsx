import React, { useRef } from 'react';
import './Nav.css';
import { Icon } from './Icon';
import { NavBarLink } from './NavBarLink';
import { LanguageSwitch } from './LanguageSwitch';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useTranslation } from 'react-i18next';

export function MobileNav(props: { isTablet: boolean }) {
  const [open, setOpen] = React.useState(false);

  const { t } = useTranslation('common');

  const wrapperRef = useRef(null);
  const outsideClick = useOutsideClick(wrapperRef);

  React.useEffect(() => {
    if (open) {
      setOpen(!outsideClick.isOutside);
    }
  }, [outsideClick.isOutside]);

  return (
    <div className="mobile-nav-wrapper">
      <div className="logo-icon">
        <Icon type="logo" />
      </div>
      <div className="mobile-nav-menu">
        <LanguageSwitch isMobile isTablet={props.isTablet} />
        <div
          className="logo"
          ref={wrapperRef}
          onClick={() => setOpen((p) => !p)}
        >
          <Icon type="bars" />
          <nav
            className={
              'mobile-nav ' +
              (open ? 'open ' : ' ') +
              (props.isTablet ? 'tablet' : '')
            }
          >
            <NavBarLink link="/" isMobile>
              {t('home')}
            </NavBarLink>
            <NavBarLink link="/wines" isMobile>
              {t('wines')}
            </NavBarLink>
            <NavBarLink link="/about" isMobile>
              {t('about')}
            </NavBarLink>
            <NavBarLink link="/contacts" isMobile>
              {t('contacts')}
            </NavBarLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const { t } = useTranslation('common');

  return (
    <div className="nav-wrapper">
      <div className="logo-icon">
        <Icon type="logo" />
      </div>
      <nav className="nav">
        <NavBarLink link="/">{t('home')}</NavBarLink>
        <NavBarLink link="/wines">{t('wines')}</NavBarLink>
        <NavBarLink link="/about">{t('about')}</NavBarLink>
        <NavBarLink link="/contacts">{t('contacts')}</NavBarLink>
        <LanguageSwitch />
      </nav>
    </div>
  );
}
