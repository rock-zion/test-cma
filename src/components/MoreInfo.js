import React, { Component } from 'react'
import {MoreInfoStyle} from '../style/components'
import companyIcon from '../assets/company-icon.svg'

export class MoreInfo extends Component {
  render() {
    return (
      <MoreInfoStyle>
      <div className="profile-img-container">
        <img src={companyIcon} alt=""/>
      </div>
      <div>
        <p className="label">Company</p>
        <p className="text">Rock Paper Scissors</p>
        <p className="sub-text">Website: tilde.inc.com</p>

        <p  className="label">Email</p>
        <p className="text">octocat@github.com</p>

        <p className="label">Twitter username</p>
        <p className="text">octocat</p>
      </div>
      </MoreInfoStyle>
    )
  }
}

export default MoreInfo
