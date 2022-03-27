import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitch.css';
import { Icon } from './Icon';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { NavBarLink } from './NavBarLink';

export function LanguageSwitch(props: {
  isMobile?: boolean;
  isTablet?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();

  const wrapperRef = useRef(null);
  const outsideClick = useOutsideClick(wrapperRef);

  React.useEffect(() => {
    if (open) {
      setOpen(!outsideClick.isOutside);
    }
  }, [outsideClick.isOutside]);

  function changeLanguage(language: string) {
    setOpen(false);
    i18n.changeLanguage(language);
  }

  const languageList = ['en', 'sl', 'it', 'de'];

  return (
    <div className="language-switch">
      <div className="cont" ref={wrapperRef} onClick={() => setOpen((p) => !p)}>
        <NavBarLink isMobile={props.isMobile}>
          <Icon type="globe" />
        </NavBarLink>
      </div>
      <div
        className={
          'menu ' +
          (open ? 'open ' : '') +
          (props.isMobile ? 'mobile ' : ' ') +
          (props.isTablet ? 'tablet' : '')
        }
      >
        <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
          {languageList.map((v: any) => (
            <li key={v}>
              <div
                className={'menuItem ' + (v === i18n.language ? 'active' : '')}
                onClick={() => changeLanguage(v)}
              >
                <Icon
                  type={String('flag_').concat(v)}
                  className="flag"
                  spacingRight
                />
                {v.toUpperCase()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
