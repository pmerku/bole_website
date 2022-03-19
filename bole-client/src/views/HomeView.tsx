import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../assets/home/DJI_0258.jpg';
import './HomeView.css';
import { Button } from '../components/Button';

// TODO consistent nav and page height (ask jelle)
export function HomeView(props: { isMobile: boolean }) {
  const { t } = useTranslation('home');

  return (
    <div className="home-wrapper">
      <div className={'home-image ' + (props.isMobile ? 'mobile' : '')}>
        <img src={img} alt="home-image" />
      </div>
      <div className="home-banner">
        <text className="banner-text">BOLE</text>
      </div>
      <Button
        onClick={() => (window.location.href = '/wines')}
        className={'home-button ' + (props.isMobile ? 'mobile' : '')}
      >
        {t('button')}
      </Button>
    </div>
  );
}
