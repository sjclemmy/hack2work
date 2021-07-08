import React from "react";
import {GridCol, GridRow, H1, LeadParagraph, ListItem, Paragraph, H3, Link, Button, Main} from "govuk-react";
import '../App.css';

export function LandingPage() {
  return (
    <div>
      <div class="header-top">
        <Main>
      <h1 class="govuk-heading-xl white">Cheshire East Newsletter</h1>
      <p class="govuk-body-l white">
        Welcome to the Cheshire East Newsletter.
        This is where you can find information about job opportunities and training courses your local area and register your interest.
      </p>
        </Main>
      </div>
      <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol>
          <H3>Latest Jobs</H3>
          <Paragraph>
            Heron Foods in Macclesfield are opening a new megastore and are recruiting a range of roles including:
          </Paragraph>
          <ul class="govuk-list">
            <ListItem>
              <Link href="/store-manager">Store Manager</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Assistant Manager</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Cleaner</Link>
            </ListItem>
            <ListItem>
              <Link href="/opportunities">Till Operator</Link>
            </ListItem>
          </ul>
          <Link href="/opportunities"><Button>All Job Opportunities</Button></Link>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol>
          <H3>Latest Training Opportunities</H3>
          <ul class="govuk-list">
            <ListItem>
              <Link href="#">CSCS Training with badge</Link>
            </ListItem>
            <ListItem>
              <Link href="#">SIA Security with badge</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Customer Service</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Step into Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Employability</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Microsoft Office</Link>
            </ListItem>
            <ListItem>
              <Link href="opportunities.js">See all training ...</Link>
            </ListItem>
          </ul>
          <Link href="/training"><Button>All Training Opportunities</Button></Link>
        </GridCol>
      </GridRow>
      </Main>
    </div>
  );
}
