import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import './WinesView.css';
import { WinesData } from './WinesData';
import ReactGa from 'react-ga';

function InfoCard(props: { name: string; isMobile: boolean }) {
  const { t } = useTranslation('wines');

  function handleClick() {
    ReactGa.event({
      category: 'wines',
      action: 'Button click on bottle',
      label: 'Label for wines',
    });
    window.location.href = '/contacts';
  }

  return (
    <div className={'info-card-wrapper ' + (props.isMobile ? 'mobile' : '')}>
      <h1>{t(props.name + '.title')}</h1>
      <p>{t(props.name + '.info')}</p>
      <p>{t(props.name + '.description')}</p>
      <h3>{t(props.name + '.price')}</h3>
      <Button
        className={props.isMobile ? 'mobile-button' : 'bottle-button'}
        onClick={handleClick}
      >
        {t('order')}
      </Button>
    </div>
  );
}

function SlideShow(props: { slides: any; isMobile: boolean }) {
  const [current, setCurrent] = React.useState(0);
  const length = props.slides.length;

  if (!Array.isArray(props.slides) || length <= 0) return null;

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const classNameSlide = 'slide ' + (props.isMobile ? 'mobile ' : ' ');
  const classNameActiveSlide = classNameSlide + 'active';

  return (
    <div className="slideshow-wrapper">
      {WinesData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current ? classNameActiveSlide : classNameSlide
            }
          >
            {index === current && (
              <>
                <div
                  className={
                    'bottle-card ' + (props.isMobile ? 'mobile ' : ' ')
                  }
                >
                  <Icon
                    className={
                      'arrow left ' + (props.isMobile ? 'mobile ' : ' ')
                    }
                    type="left_arrow"
                    onClick={() => prevSlide()}
                  />
                  <div
                    className={
                      'image-container ' + (props.isMobile ? 'mobile' : '')
                    }
                  >
                    <img src={slide.image} alt="bottle-img" />
                  </div>
                  <Icon
                    className={'arrow ' + (props.isMobile ? 'mobile ' : ' ')}
                    type="right_arrow"
                    onClick={() => nextSlide()}
                  />
                </div>
                <InfoCard name={slide.name} isMobile={props.isMobile} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function WinesView(props: { isMobile: boolean }) {
  return (
    <div className={'wines-wrapper ' + (props.isMobile ? 'mobile' : '')}>
      <SlideShow slides={WinesData} isMobile={props.isMobile} />
    </div>
  );
}
