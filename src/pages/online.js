import * as React from "react";
import {GridCol, GridRow, Main} from "govuk-react";

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
          <p className="govuk-body">
            There are a number of online providers who can help you with your application.
          </p>

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
