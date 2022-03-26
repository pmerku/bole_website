import React from 'react';
import './Root.css';
import { Route, Switch } from 'react-router-dom';
import { Nav, MobileNav } from '../components/Nav';
import { AboutView } from '../views/AboutView';
import { WinesView } from '../views/WinesView';
import { ContactsView } from '../views/ContactsView';
import { HomeView } from '../views/HomeView';
import { LoadingView } from '../views/LoadingView';
import { useTranslation } from 'react-i18next';

function NavBarRouter(props: { isMobile: boolean }) {
  return props.isMobile ? <MobileNav /> : <Nav />;
}

export function RootNavigation() {
  const [windowDimension, setWindowDimension] = React.useState<any>(null);

  const { t } = useTranslation('common');

  React.useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension <= 1200;

  return (
    <div className="wrapper">
      <NavBarRouter isMobile={isMobile} />
      <div className="page-content">
        <Switch>
          <Route exact path="/">
            <HomeView isMobile={isMobile} />
          </Route>
          <Route exact path="/wines">
            <WinesView isMobile={isMobile} />
          </Route>
          <Route exact path="/about">
            <AboutView isMobile={isMobile} />
          </Route>
          <Route exact path="/contacts">
            <ContactsView isMobile={isMobile} />
          </Route>
          <Route path="*">
            <LoadingView>{t('not-found')}</LoadingView>
          </Route>
        </Switch>
      </div>
      <div className="footer">{t('footer')}</div>
    </div>
  );
}
