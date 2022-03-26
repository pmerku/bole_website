import React from 'react';
import './AboutView.css';
import img from '../assets/placeholder_img.png';
import img_dark from '../assets/placeholder.jpg';
import { Hero, MobileHero, SideHero } from '../components/Hero';
import { useTranslation } from 'react-i18next';

function MobileView() {
  const { t } = useTranslation('about');

  return (
    <div className="mobile-about-wrapper">
      <MobileHero img={img_dark} title={t('title')} text={t('short_text')} />
      <div className="text-block-wrapper">
        <div className="text-block">
          <h2>{t('title')}</h2>
          <p>{t('long_text')}</p>
        </div>
      </div>
      <MobileHero img={img} title={t('title')} text={t('short_text')} />
      <div className="text-block-wrapper">
        <div className="text-block">
          <h2>{t('title')}</h2>
          <p>{t('long_text')}</p>
        </div>
      </div>
      <MobileHero img={img} title={t('title')} text={t('short_text')} />
    </div>
  );
}

export function AboutView(props: { isMobile: boolean }) {
  const { t } = useTranslation('about');

  return props.isMobile ? (
    <MobileView />
  ) : (
    <div className="about-wrapper">
      <Hero img={img_dark} title={t('title')} text={t('short_text')} />
      <div className="text-block-wrapper">
        <div className="text-block">
          <h2>{t('title')}</h2>
          <p>{t('long_text')}</p>
        </div>
      </div>
      <SideHero
        img={img}
        title={t('title')}
        text={t('short_text')}
        align="left"
      />
      <div className="text-block-wrapper">
        <div className="text-block">
          <h2>{t('title')}</h2>
          <p>{t('long_text')}</p>
        </div>
      </div>
      <SideHero
        img={img}
        title={t('title')}
        text={t('short_text')}
        align="right"
      />
    </div>
  );
}
