import { Fragment }  from 'react'
import {
  Main, SearchBox, TopNav, Footer
} from 'govuk-react'
import CrownIcon from '@govuk-react/icon-crown';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { LandingPage } from './pages/main'
import { Opportunities } from './pages/opportunities'
import { StoreManager } from './pages/store-manager'
import { JobHelp } from './pages/job-help'
import './App.css';
import {Appointment} from "./pages/appt";
import {Online} from "./pages/online";


const link = 'https://www.gov.uk';

const Search = (
  <SearchBox>
    <SearchBox.Input placeholder="What are you looking for?" />
    <SearchBox.Button />
  </SearchBox>
);

const Company = (
  <TopNav.Anchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitle = (
  <TopNav.NavLink href="/cheshire-east">
    Team 6 Newsletter - Cheshire East
  </TopNav.NavLink>
);

function App() {
  return (
    <Fragment>
      <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
        <TopNav.NavLink href="/opportunities">Job Opportunities</TopNav.NavLink>
        <TopNav.NavLink href="/providers">Training Providers</TopNav.NavLink>
        <TopNav.NavLink href="#">Employers</TopNav.NavLink>
        <TopNav.NavLink href="#">Academy Programmes</TopNav.NavLink>
      </TopNav>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cheshire-east" component={LandingPage} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/store-manager" component={StoreManager} />
          <Route exact path="/job-help" component={JobHelp} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/online-providers" component={Online} />
        </Switch>

      </BrowserRouter>
      <Footer
        copyright={{
          text: 'Crown copyright',
          link:
            'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
        }}
      />
    </Fragment>
  );
}

export default App;
