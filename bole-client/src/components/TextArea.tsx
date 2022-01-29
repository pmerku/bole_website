import React from 'react';
import './TextArea.css';

export function TextArea(props: {
  value: any;
  set: (text: string) => void;
  label?: string;
  placeholder: string;
  className?: string;
  limit?: number;
}) {
  const limit: number = props.limit ? props.limit : 450;

  function handleKeyDown(e: any) {
    e.target.style.height = '10rem';
    e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  return (
    <div className="styled-text-area">
      <label>
        {props.label ? <span className="text">{props.label}</span> : null}
        <textarea
          value={props.value}
          onChange={(e) => props.set(e.target.value)}
          onKeyDown={handleKeyDown}
          className={'styled-text-area ' + (props.className || '')}
          placeholder={props.placeholder}
          style={{ height: '10rem' }}
        />
      </label>
    </div>
  );
}
