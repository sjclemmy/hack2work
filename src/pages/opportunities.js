import * as React from "react";
import {FormGroup, GridCol, GridRow, H1, LeadParagraph, Link, ListItem, Paragraph, Main} from "govuk-react";

export function Opportunities() {
  return (
    <div>
      <div className="header-top">
        <Main>
          <h1 className="govuk-heading-xl white">Cheshire East Opportunities</h1>
          <p className="govuk-body-l white">
            This is a full list of opportunities in Cheshire East
          </p>
        </Main>
      </div>
      <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <LeadParagraph>
          </LeadParagraph>
          <ul>
            <ListItem>
              <Link href="/store-manager">Store Managers</Link>
              <Paragraph>Some info about the job</Paragraph>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Assistant Managers</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Cleaners</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operators</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operators</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operators</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operators</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operators</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operators</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operators</Link>
            </ListItem>
            <ListItem>
              <Link href="training">Till Operators</Link>
            </ListItem>            <ListItem>
            <Link href="training">Till Operators</Link>
          </ListItem>


          </ul>
        </GridCol>
      </GridRow>
      </Main>
    </div>
  );
}
