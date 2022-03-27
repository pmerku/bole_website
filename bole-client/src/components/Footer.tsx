import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import { NavBarLink } from './NavBarLink';

export function Footer(props: { isMobile: boolean }) {
  const { t } = useTranslation('common');

  return (
    <footer className={'footer-wrapper ' + (props.isMobile ? 'mobile' : '')}>
      <div className="about">
        <h3>{t('title')}</h3>
        <p>{t('footer')}</p>
      </div>
      <div className={'links ' + (props.isMobile ? 'mobile' : '')}>
        <NavBarLink isMobile link="/tos">
          Terms Of Service
        </NavBarLink>
        <NavBarLink isMobile link="/privacy">
          Privacy Policy
        </NavBarLink>
      </div>
      <div className={'copyright ' + (props.isMobile ? 'mobile' : '')}>
        <div>Copyright &copy;</div>
        <div className={'middle ' + (props.isMobile ? 'mobile' : '')}>
          2021 Primož Merkù
        </div>
        <a href="mailto:pmerku@gmail.com">pmerku@gmail.com</a>
      </div>
    </footer>
  );
}
