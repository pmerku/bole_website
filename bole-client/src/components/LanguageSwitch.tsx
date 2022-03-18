import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitch.css';
import { Icon } from './Icon';
import { useOutsideClick } from '../hooks/useOutsideClick';

export function LanguageSwitch(props: { isMobile?: boolean }) {
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

  return (
    <div className="language-switch">
      <div className="cont" ref={wrapperRef} onClick={() => setOpen((p) => !p)}>
        <Icon type="globe" />
        <Icon type="triangle" />
      </div>
      <div
        className={
          'menu ' + (open ? 'open ' : '') + (props.isMobile ? 'mobile' : '')
        }
      >
        <div className="menuItem" onClick={() => changeLanguage('en')}>
          <Icon type="flag_en" className="flag" />
          EN
        </div>
        <div className="menuItem" onClick={() => changeLanguage('sl')}>
          <Icon type="flag_sl" className="flag" />
          SL
        </div>
        <div className="menuItem" onClick={() => changeLanguage('it')}>
          <Icon type="flag_it" className="flag" />
          IT
        </div>
        <div className="menuItem" onClick={() => changeLanguage('de')}>
          <Icon type="flag_de" className="flag" />
          DE
        </div>
      </div>
    </div>
  );
}
