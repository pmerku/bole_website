import React from 'react';
import './Button.css';

export function Button(props: {
  children: any;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`button-new ${props.className ? props.className : ''}`}
      onClick={props.onClick ? props.onClick : () => true}
    >
      {props.children}
    </button>
  );
}
