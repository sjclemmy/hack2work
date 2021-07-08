import React from "react";
import {GridCol, GridRow, Main} from "govuk-react";
import { withRouter } from "react-router-dom";

import { Button } from 'govuk-react'

export class JobHelp extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
    this.radioChange = this.radioChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  handleRedirect() {
    console.log('hi', this.state.selectedOption);
    if (this.state.selectedOption === 'face') {
      this.props.history.push("appointment");
    } else {
      this.props.history.push("online-providers");
    }




  }

  render() {
    return (
      <Main>
        <GridRow>
          <GridCol setWidth="two-thirds">
            <div className="govuk-form-group govuk-!-margin-top-8">
              <fieldset className="govuk-fieldset">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                  <h1 className="govuk-fieldset__heading">
                    What kind of help would you like?
                  </h1>
                </legend>
                <div id="sign-in-hint" className="govuk-hint">
                  You can get help either face to face with another person or online via a range of service providers.
                  Choose which one you would like.
                </div>
                <div className="govuk-radios">
                  <div className="govuk-radios__item">
                    <input className="govuk-radios__input" id="where-do-you-live" name="where-do-you-live" type="radio"
                           value="face" onChange={this.radioChange}/>
                    <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live">
                      Face to Face
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input className="govuk-radios__input" id="where-do-you-live-2" name="where-do-you-live"
                           type="radio"
                           value="online" onChange={this.radioChange}/>
                    <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-2">
                      Online or Local Provider Support
                    </label>
                  </div>
                </div>

              </fieldset>
              <Button onClick={this.handleRedirect} className="govuk-!-margin-top-4">Continue</Button>
            </div>
          </GridCol>
        </GridRow>
      </Main>
    )
  }
}
