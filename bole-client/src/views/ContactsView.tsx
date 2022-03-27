import React from 'react';
import './ContactsView.css';
import { Map } from '../components/Map';
import { TextInput } from '../components/TextInput';
import { TextArea } from '../components/TextArea';
import { Button } from '../components/Button';
import { useFetch } from '../hooks/useFetch';
import { Icon } from '../components/Icon';
import { useTranslation } from 'react-i18next';
import ReactGa from 'react-ga';

export function ContactsView(props: { isMobile: boolean }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const { t } = useTranslation('contacts');

  const location = {
    address: t('map.address'),
    lat: 45.67296,
    lng: 13.77905,
  };

  const sendMailFetch = useFetch({
    url: '/api/v1/mail/',
    method: 'POST',
  });

  function handleClick() {
    ReactGa.event({
      category: 'contacts',
      action: 'Form submit on contacts',
      label: 'Label for contacts',
    });

    sendMailFetch.run({
      name,
      email,
      subject,
      message,
    });
  }

  React.useEffect(() => {
    if (sendMailFetch.done) {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      sendMailFetch.reset();
    }
  }, [sendMailFetch.done]);

  const infoText = 'info-text ' + (props.isMobile ? 'mobile' : '');

  return (
    <div className="contacts-wrapper">
      <h2
        className="title"
        style={{ marginBottom: props.isMobile ? '0' : '3rem' }}
      >
        {t('title')}
      </h2>
      <div className={'info-container ' + (props.isMobile ? 'mobile' : '')}>
        <div className={'info-card ' + (props.isMobile ? '' : 'expanded')}>
          <div
            className={
              props.isMobile ? 'info-content-centered' : 'info-content-expanded'
            }
          >
            <h3 className={infoText} style={{ fontSize: '1.8rem' }}>
              {t('form.title')}
            </h3>
            <p className={infoText} style={{ marginBottom: '2rem' }}>
              {t('form.subtitle')}
            </p>
            <p className={infoText}>
              <Icon type="email" spacingRight />
              {t('form.email')}
            </p>
            <p className={infoText}>
              <Icon type="phone" spacingRight />
              {t('form.phone')}
            </p>
            <p className={infoText}>
              <Icon type="location" spacingRight />
              {location.address}
            </p>
          </div>
        </div>
        <div className="form-container">
          <TextInput
            value={name}
            set={setName}
            placeholder={t('form.placeholder.name')}
            label="Name"
          />
          <TextInput
            value={email}
            set={setEmail}
            placeholder={t('form.placeholder.email')}
            label="Email"
          />
          <TextInput
            value={subject}
            set={setSubject}
            placeholder={t('form.placeholder.subject')}
            label="Subject"
          />
          <TextArea
            value={message}
            set={setMessage}
            placeholder={t('form.placeholder.message')}
            label="Message"
          />
          <div className="button-wrapper">
            <Button className="form-button" onClick={handleClick}>
              Send
            </Button>
            {sendMailFetch.error ? <p>t{'form.error'}</p> : null}
          </div>
        </div>
      </div>
      <div className="map-container">
        <h2 className="title">{t('map.title')}</h2>
        <Map location={location} zoom={15} isMarkerShown />
      </div>
    </div>
  );
}
