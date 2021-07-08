import * as React from "react";
import {GridCol, GridRow, ButtonArrow, Button, Main, Panel} from "govuk-react";

export function Appointment() {
  return (
    <Main>
      <GridRow>
        <GridCol>
          <Panel title="Contact your work coach">
            Contact your work coach via the journal to arrange an appointment with someone to help you.
          </Panel>
        </GridCol>
      </GridRow>
      <p className="govuk-body">
        <a href="https://www.universal-credit.service.gov.uk/sign-in" target="new" className="govuk-button govuk-button--start">
          Open Journal

        </a>
      </p>
    </Main>
  )
}
