import * as React from "react";
import {GridCol, GridRow, Link, Main} from "govuk-react";

export function Online() {
  return (
    <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <h1 className="govuk-heading-l govuk-!-margin-top-8">
            Get Help with your Job Application Online
          </h1>
          <p className="govuk-body">
            There are a number of online providers who can help you with your application.
          </p>
          <h2>Online Providers</h2>
          <ul className="govuk-list">
            <li>
              <Link href="">National Careers</Link>
            </li>
            <li>
              <Link href="">CV Builder</Link>
            </li>
          </ul>
          <h2>Local Providers</h2>
          <h3>Drop In Centres</h3>
          <ul className="govuk-list">
            <li>
              <Link href="">Macclesfield Library</Link>
            </li>
            <li>
              <Link href="">IT Access Drop In</Link>
            </li>
            <li>
              <Link href="">IT Centre</Link>
            </li>
          </ul>
          <h3>Work Clubs</h3>
          <ul className="govuk-list">
            <li>
              <Link href="">Congleton Learning Centre at Congleton Library or Macclesfield Library</Link>
            </li>
            <li>
              <Link href="">Knutsford Hub</Link>
            </li>
            <li>
              <Link href="">Job Search Support Hub</Link>
            </li>
          </ul>

        </GridCol>
      </GridRow>
      <p className="govuk-body">
        {/*<a href="/store-manager" className="govuk-button govuk-button--start">*/}
        {/*  Return to job*/}
        {/*  <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19"*/}
        {/*       viewBox="0 0 33 40" aria-hidden="true" focusable="false">*/}
        {/*    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>*/}
        {/*  </svg>*/}
        {/*</a>*/}
      </p>
    </Main>
  )
}
