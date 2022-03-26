import React from 'react';
import './Hero.css';

export function Hero(props: { img: any; title: string; text: string }) {
  return (
    <div className="hero-wrapper">
      <div className="image-wrapper">
        <img src={props.img} alt="placeholder-image" />
      </div>
      <div className="inner-card">
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}

export function SideHero(props: {
  img: any;
  title: string;
  text: string;
  align?: 'left' | 'right';
}) {
  return (
    <div
      className={'side-hero-wrapper ' + (props.align ? props.align : 'left')}
    >
      <div className="image-wrapper">
        <img src={props.img} alt="placeholder-image" />
      </div>
      <div className={'inner-card ' + (props.align ? props.align : 'left')}>
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}

export function MobileHero(props: {
  img: any;
  title: string;
  text: string;
  align?: 'left' | 'right';
}) {
  return (
    <div className="mobile-hero-wrapper">
      <div className="image-wrapper">
        <img src={props.img} alt="placeholder-image" />
      </div>
      <div className="inner-card-wrapper">
        <div className="inner-card">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
