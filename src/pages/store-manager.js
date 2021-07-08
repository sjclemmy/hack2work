import * as React from "react";
import {FormGroup, GridCol, GridRow, H1, LeadParagraph, Link, ListItem, Paragraph, Main} from "govuk-react";

export function StoreManager() {
  return (
    <Main>
    <GridRow>
      <GridCol setWidth="two-thirds">
        <h1 className="govuk-heading-l govuk-!-margin-top-8">
          Store Manager
        </h1>
        <table className="govuk-table govuk-!-margin-bottom-6">
          <caption className="govuk-visually-hidden">
            Job details
          </caption>
          <tbody className="govuk-table__body">
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Posting date:
            </th>

            <td className="govuk-table__cell">
              08 June 2021
            </td>
          </tr>

          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Salary:

            </th>
            <td className="govuk-table__cell">
              Not specified
            </td>
          </tr>

          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Additional salary information:
            </th>
            <td className="govuk-table__cell">
              £23,255, plus bonus
            </td>
          </tr>

          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Hours:
            </th>
            <td className="govuk-table__cell">
              Full time
            </td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Closing date:


            </th>
            <td className="govuk-table__cell">
              08 July 2021
            </td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Location:
            </th>
            <td className="govuk-table__cell">
              Macclesfield Town Centre
            </td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Company:
            </th>
            <td className="govuk-table__cell">
              Heron Foods
            </td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Job type:
            </th>
            <td className="govuk-table__cell">
              Permanent
            </td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Job reference:
            </th>
            <td className="govuk-table__cell">
              4361
            </td>
          </tr>
          </tbody>
        </table>
        <p className="govuk-body">
          <a href="https://findajob.dwp.gov.uk/apply/6036861" className="govuk-button govuk-button--start">
            Apply for this job
            <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19"
                 viewBox="0 0 33 40" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
            </svg>
          </a>
        </p>
        <div className="govuk-body govuk-!-margin-bottom-6" itemProp="description">
          <h2 className="govuk-heading-m govuk-!-margin-top-8">
            Summary
          </h2>
          Who are Heron Foods?
          <br />
          <br />

          Founded in 1979, Heron Foods is a food retail business providing its customers with high quality, low priced products. Since
          joining forces with B&M in 2017, we have continued with our ambitious and exciting growth plans, now with over 300 stores and new
          store openings month-by-month. Heron Foods offers excellent opportunities for development and progression as we always look to
          nurture our own internal talent. This an exciting time to join our business!

          <br />
          <br />
          <br />
          <br />
          The store is yours!
          <br /><br />

          As a Store Manager at Heron Foods, the store is yours! Clearly there will be guidelines and compliances to ensure that our
          customers can enjoy their familiar format, but once they are met the rest is up to you. With exciting new lines arriving every
          day, you will have the opportunity to be commercially savvy and positively influence your KPIs and to identify potential areas to
          capitalise on.


        </div>
        <p className="govuk-body">
          <a href="https://findajob.dwp.gov.uk/apply/6036861" className="govuk-button govuk-button--start">
            Apply for this job
            <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19"
                 viewBox="0 0 33 40" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
            </svg>
          </a>
        </p>
      </GridCol>
      <GridCol setWidth="one-third">
        <aside className="sharing-links">
          <section className="widget widget-border">
            <ul className="govuk-list govuk-!-font-size-16">
              <li>
                <a className="govuk-link" href="#" data-js-favourite="6036861">
                  <i className="icon icon-heart-blue govuk-!-margin-right-1"></i>Save to favourites
                </a>
              </li>
              <li>
                <a className="govuk-link" href="#" data-js="print">
                  <i className="icon icon-print govuk-!-margin-right-1"></i>Print this job
                </a>
              </li>
              <li>

                <a className="govuk-link"
                   href="mailto:?subject=Job%20ad%20found%20on%20Find%20a%20job%3A%20Store%20Manager&amp;body=Hi%20there%2C%0A%0AI%20thought%20you%20might%20want%20to%20view%20this%20job%20I%20found%3A%20Store%20Manager%0A%0ALink%3A%20https%3A%2F%2Ffindajob.dwp.gov.uk%2Fdetails%2F6036861%0A%0AKind%20regards%2C"
                   target="_blank">
                  <i className="icon icon-email govuk-!-margin-right-1"></i>Share this job via email</a>

              </li>
              <li>
                <a className="govuk-link" href="/report/6036861">
                  <i className="icon icon-important-blue govuk-!-margin-right-1"></i>Report this job
                </a>
              </li>
            </ul>
          </section>
        </aside>
        <h2>Get help applying for this job</h2>
        <p class="govuk-body">Help is available to write your CV and cover letter.</p>
        <p class="govuk-body">Click the get help button below.</p>
        <a href="/job-help" role="button" draggable="false" className="govuk-button govuk-button--secondary"
           data-module="govuk-button">
          Get Help</a>

      </GridCol>
    </GridRow>
    </Main>
  );
}
