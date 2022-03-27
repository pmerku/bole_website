import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../assets/home/DJI_0258.jpg';
import './HomeView.css';
import { Button } from '../components/Button';
import ReactGa from 'react-ga';

export function HomeView(props: { isMobile: boolean }) {
  const { t } = useTranslation('home');

  function handleClick() {
    ReactGa.event({
      category: 'home',
      action: 'Button click on home',
      label: 'Label for home',
    });
    window.location.href = '/wines';
  }

  return (
    <div className="home-wrapper">
      <div className={'home-image ' + (props.isMobile ? 'mobile' : '')}>
        <img src={img} alt="home-image" />
      </div>
      <div className="home-banner">
        <text className={'banner-text ' + (props.isMobile ? 'mobile' : '')}>
          BOLE
        </text>
      </div>
      <Button
        onClick={handleClick}
        className={'home-button ' + (props.isMobile ? 'mobile' : '')}
      >
        {t('button')}
      </Button>
    </div>
  );
}
