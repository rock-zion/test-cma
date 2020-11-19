import React, { Component } from 'react';
import { MoreInfoStyle } from '../style/components';
import companyIcon from '../assets/company-icon.svg';

export class MoreInfo extends Component {
  render() {
    const { email, company, blog, twitter} = this.props;
    return (
      <MoreInfoStyle>
        <div className='profile-img-container'>
          <img src={companyIcon} alt='' />
        </div>
        <div>
          <p className='label'>Company</p>
          <p className='text'>{company}</p>
          <a href={blog} rel="noreferrer" target='_blank' className='sub-text'>
            Visit Website
          </a>

          <p className='label'>Email</p>
          <p className='text'>{email === null ? "no email address available" : email}</p>

          <p className='label'>Twitter username</p>
          <p className='text'>{twitter === null ? "no twitter handle available" : `@${twitter}`}</p>
        </div>
      </MoreInfoStyle>
    );
  }
}

export default MoreInfo;
