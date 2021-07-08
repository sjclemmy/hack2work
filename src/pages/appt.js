import * as React from "react";
import {GridCol, GridRow, ButtonArrow, Button, Main, Panel} from "govuk-react";

export function Appointment() {
  return (
    <Main>
      <GridRow>
        <GridCol>
          <Panel title="Contact your work coach">
            Contact your work coach via the journal to arrange an appointment
          </Panel>
        </GridCol>
      </GridRow>
      <p className="govuk-body">
        <a href="/store-manager" className="govuk-button govuk-button--start">
          Return to job
          <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19"
               viewBox="0 0 33 40" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
          </svg>
        </a>
      </p>
    </Main>
  )
}
