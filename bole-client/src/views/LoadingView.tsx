import React from 'react';
import './LoadingView.css';

export function LoadingView(props: {
  children: any;
  fadein?: boolean;
  icon?: boolean;
}) {
  return (
    <div className={`loading-view ${props.fadein ? 'fadein' : ''}`}>
      {props.icon ? (
        <div className="icon" />
      ) : (
        <div className="wrapper">
          <div className="fof">
            <div className="box">
              <h1>{props.children}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
