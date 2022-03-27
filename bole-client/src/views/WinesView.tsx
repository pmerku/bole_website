import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import './WinesView.css';
import { WinesData } from './WinesData';
import ReactGa from 'react-ga';

export function WinesView(props: { isMobile: boolean }) {
  return <SlideShow slides={WinesData} isMobile={props.isMobile} />;
}

function SlideShow(props: { slides: any; isMobile: boolean }) {
  const { t } = useTranslation('wines');
  const [current, setCurrent] = React.useState(0);
  const length = props.slides.length;

  if (!Array.isArray(props.slides) || length <= 0) return null;

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function handleClick() {
    ReactGa.event({
      category: 'wines',
      action: 'Button click on bottle',
      label: 'Label for wines',
    });
    window.location.href = '/contacts';
  }

  return (
    <div className="page-content-wrapper">
      {WinesData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'slide active' : 'slide'}
          >
            {index === current && (
              <div
                className={'wines-wrapper ' + (props.isMobile ? 'mobile' : '')}
              >
                <div className="bottles-wrapper">
                  <div
                    className={
                      'bottle-card ' + (props.isMobile ? 'mobile' : '')
                    }
                  >
                    <Icon
                      type="left_arrow"
                      className="bottle-arrow"
                      onClick={() => prevSlide()}
                    />
                    <div className="container">
                      <img
                        className="bottle-img"
                        src={slide.image}
                        alt="bottle-img"
                      />
                    </div>
                    <Icon
                      type="right_arrow"
                      className="bottle-arrow"
                      onClick={() => nextSlide()}
                    />
                  </div>
                </div>
                <div
                  className={'bottle-info ' + (props.isMobile ? 'mobile' : '')}
                >
                  <h1>{t(slide.name + '.title')}</h1>
                  <p>{t(slide.name + '.info')}</p>
                  <p>{t(slide.name + '.description')}</p>
                  <h3>{t(slide.name + '.price')}</h3>
                  <Button className="bottle-button" onClick={handleClick}>
                    {t('order')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
