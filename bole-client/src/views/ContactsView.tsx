import React from 'react';
import './ContactsView.css';
import { Map } from '../components/Map';
import { TextInput } from '../components/TextInput';
import { TextArea } from '../components/TextArea';
import { Button } from '../components/Button';
import { useFetch } from '../hooks/useFetch';

const location = {
  address: 'Via Sottomonte, 25, 34135 Trieste TS',
  lat: 45.67296,
  lng: 13.77905,
};

export function ContactsView(props: { isMobile: boolean }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const sendMailFetch = useFetch({
    url: '/api/v1/mail/',
    method: 'POST',
  });

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
      <h2 className="title">Contact us</h2>
      <div className={'info-container ' + (props.isMobile ? 'mobile' : '')}>
        <div className="info-card">
          <p className={infoText}>email</p>
          <p className={infoText}>phone</p>
          <p className={infoText}>{location.address}</p>
        </div>
        <div className="form-container">
          <TextInput
            value={name}
            set={setName}
            placeholder="John Doe"
            label="Name"
          />
          <TextInput
            value={email}
            set={setEmail}
            placeholder="email@example.com"
            label="Email"
          />
          <TextInput
            value={subject}
            set={setSubject}
            placeholder="Type your subject here"
            label="Subject"
          />
          <TextArea
            value={message}
            set={setMessage}
            placeholder="Type your message here"
            label="Message"
          />
          <div className="button-wrapper">
            <Button
              className="form-button"
              onClick={() =>
                sendMailFetch.run({
                  name,
                  email,
                  subject,
                  message,
                })
              }
            >
              Send
            </Button>
            {sendMailFetch.error ? (
              <p>Something went wrong, try again later...</p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="map-container">
        <h2 className="title">Come visit us here</h2>
        <Map location={location} zoom={15} isMarkerShown />
      </div>
    </div>
  );
}
