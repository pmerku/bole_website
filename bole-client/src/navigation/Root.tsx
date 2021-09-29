import React from 'react';
import './Root.css';
import { Route, Switch } from 'react-router-dom';
import { Nav, MobileNav } from '../components/Nav';
import { AboutView } from '../views/AboutView';
import { WinesView } from '../views/WinesView';
import { StoryView } from '../views/StoryView';
import { ContactsView } from '../views/ContactsView';
import { HomeView } from '../views/HomeView';
import { LoadingView } from '../views/LoadingView';

function NavBarRouter() {
  const [windowDimension, setWindowDimension] = React.useState<any>(null);

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

  const isMobile = windowDimension <= 700;

  return isMobile ? <MobileNav /> : <Nav />;
}

// TODO consistent nav and page height (ask jelle)
export function RootNavigation() {
  return (
    <div className="wrapper">
      <NavBarRouter />
      <div className="page-content">
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/about">
            <AboutView />
          </Route>
          <Route exact path="/wines">
            <WinesView />
          </Route>
          <Route exact path="/story">
            <StoryView />
          </Route>
          <Route exact path="/contacts">
            <ContactsView />
          </Route>
          <Route path="*">
            <LoadingView>Not Found</LoadingView>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
