import React from 'react';

const icons: any = {
  logo: `<svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stream" class="svg-inline--fa fa-stream fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"></path></svg>`,
  globe: `<svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" class="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>`,
  flag_en: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><defs><clipPath id="a"><path fill-opacity=".67" d="M-85.333 0h682.67v512h-682.67z"/></clipPath></defs><g clip-path="url(#a)" transform="translate(80) scale(.94)"><g stroke-width="1pt"><path fill="#006" d="M-256 0H768.02v512.01H-256z"/><path fill="#fff" d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z"/><path fill="#fff" d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z"/><path fill="#c00" d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z"/></g></g></svg>`,
  flag_de: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#ffce00" d="M0 320h640v160.002H0z"/><path d="M0 0h640v160H0z"/><path fill="#d00" d="M0 160h640v160H0z"/></svg>`,
  flag_sl: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><defs><clipPath id="a"><path fill-opacity=".67" d="M-15.067 0h682.67v512h-682.67z"/></clipPath></defs><g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="translate(14.125) scale(.9375)"><path fill="#fff" d="M-62 0H962v512H-62z"/><path fill="#de2918" d="M-62 341.33H962V512H-62z"/><path fill="#08399c" d="M-62 170.67H962v170.67H-62z"/><path fill="#de2918" d="M228.37 92.976c-4.02 61.651-6.322 95.436-15.709 111.07-10.15 16.789-20.025 29.081-59.63 43.882-39.61-14.81-49.48-27.1-59.633-43.89-9.387-15.63-11.69-49.41-15.709-111.06l5.853-1.971c11.783-3.594 20.574-6.484 27.077-7.767 9.313-1.971 17.228-4.2 42.257-4.722 25.029.43 32.983 2.797 42.296 4.768 6.45 1.375 15.617 4.081 27.312 7.744l5.884 1.948z"/><path fill="#08399c" d="M222.6 90.955c-3.802 61.518-6.983 89.69-11.943 103.24-9.626 23.193-24.866 35.909-57.665 48.038-32.8-12.14-48.04-24.86-57.664-48.05-4.961-13.54-8.095-41.64-11.788-103.3 11.534-3.602 20.577-6.418 27.08-7.7 9.313-1.972 17.228-4.294 42.257-4.725 25.029.431 33.037 2.753 42.35 4.724 6.503 1.283 15.732 4.098 27.373 7.763z"/><path fill="#fc0" d="M152.96 109.79l1.573 3.723 6.91.947-4.478 2.7 4.33 2.894-6.298 1.055-1.916 3.374-2.156-3.474-5.995-.85 4.08-2.958-4.2-2.691 6.635-1.017 1.515-3.703z"/><path fill="#fff" d="M208.28 179.62l-3.83-3.028-2.769-4.554-5.422-4.704-2.826-4.753-5.423-4.852-2.653-4.753-2.883-2.327-1.903-1.832-4.899 4.295-2.67 4.665-3.326 3.016-3.655-2.854-2.763-4.867L153 134.855l-10.26 18.217-2.763 4.867-3.654 2.854-3.327-3.016-2.67-4.665-4.898-4.295-1.904 1.832-2.883 2.328-2.653 4.752-5.423 4.852-2.825 4.753-5.423 4.704-2.768 4.554-3.821 3.099c1.984 16.886 12.748 30.116 18.613 36.168 6.545 6.355 20.039 14.858 36.54 20.486 16.548-5.508 30.229-14.131 36.774-20.486 5.865-6.052 16.629-19.282 18.625-36.239z"/><path fill="#fc0" d="M169.45 83.89l1.573 3.723 6.91.947-4.478 2.7 4.33 2.894-6.298 1.055-1.916 3.374-2.156-3.474-5.995-.85 4.08-2.958-4.2-2.691 6.635-1.017 1.515-3.703zM136.47 83.834l1.573 3.723 6.91.947-4.478 2.7 4.33 2.894-6.298 1.055-1.916 3.374-2.156-3.474-5.995-.85 4.08-2.958-4.2-2.691 6.635-1.017 1.515-3.703z"/><path fill="#08399c" d="M199.72 203.03l-7.468.023-6.892-.513-8.348-4.094-9.409.056-8.149 3.981-6.427.569-6.428-.569-8.148-3.98-9.41-.057-8.347 4.094-6.892.513-7.562-.104-3.652-6.187.136-.142 11.172 1.848 6.891-.512 8.348-4.095 9.41.057 8.148 3.981 6.427.568 6.428-.568 8.148-3.981 9.41-.057 8.347 4.095 6.892.512 10.874-1.906.144.286-3.643 6.182zM113.25 212.54l7.393-.513 8.348-4.094 9.409.057 8.148 3.98 6.428.569 6.427-.568 8.149-3.981 9.41-.057 8.347 4.094 7.493.513 4.835-5.96-.163-.135-5.18 1.51-6.892-.512-8.347-4.094-9.41.056-8.148 3.981-6.428.569-6.427-.569-8.149-3.98-9.409-.057-8.347 4.094-6.892.513-5.077-1.28-.061.25 4.543 5.614z"/></g></svg>`,
  flag_it: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v479.997H0z"/><path fill="#009246" d="M0 0h213.331v479.997H0z"/><path fill="#ce2b37" d="M426.663 0h213.331v479.997H426.663z"/></g></svg>`,
  triangle: `<svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`,
  left_arrow: `<svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>`,
  right_arrow: `<svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>`,
  bars: `<svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>`,
  phone: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>`,
  email: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>`,
  location: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>`,
  close: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>`,
};

export function Icon(props: {
  type: string;
  className?: string;
  onClick?: () => void;
  spacingRight?: boolean;
  spacingLeft?: boolean;
}) {
  const style = {
    width: '1em',
    height: '1em',
    paddingRight: props.spacingRight ? '0.8rem' : '',
    paddingLeft: props.spacingLeft ? '0.8rem' : '',
  };

  return (
    <span
      onClick={props.onClick ? props.onClick : () => true}
      className={props.className ? props.className : ''}
      style={style}
      dangerouslySetInnerHTML={{ __html: icons[props.type] }}
    />
  );
}
