import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Root.css';
import { Icon } from '../components/Icon';
import { NavBarLink } from '../components/NavBarLink';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { AboutView } from '../views/AboutView';
import { WinesView } from '../views/WinesView';
import { StoryView } from '../views/StoryView';
import { ContactsView } from '../views/ContactsView';
import { HomeView } from '../views/HomeView';
import { LoadingView } from '../views/LoadingView';

function NavBarRouter() {
  return (
    <div className="nav-bar-wrapper">
      <div className="logo">
        <Icon type="logo" />
      </div>
      <nav className="top-nav">
        <NavBarLink link="/">Home</NavBarLink>
        <NavBarLink link="/about">About Us</NavBarLink>
        <NavBarLink link="/wines">Wines</NavBarLink>
        <NavBarLink link="/story">Our Story</NavBarLink>
        <NavBarLink link="/contacts">Contacts</NavBarLink>
        <LanguageSwitch />
      </nav>
    </div>
  );
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
