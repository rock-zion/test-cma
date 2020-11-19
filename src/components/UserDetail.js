import React, { Component } from 'react';
import { UserDetailComponentStyle } from '../style/components';

export class UserDetail extends Component {
  render() {
    return <UserDetailComponentStyle>
      <div className="profile-img-container">
        <img src="" alt=""/>
      </div>
      <div>
        <div className="name-container">
        <p>Abu-Ekpeshie Peter</p>
        <a href="" target="_blank" >Visit Github</a>
        </div>
        <div className="follow-count">
          <p className="followers">4566 <br/> <span className="follow-label">Followers</span> </p>
          <p className="following">4566 <br/> <span className="follow-label">Following</span></p>
        </div>
      </div>
    </UserDetailComponentStyle>;
  }
}

export default UserDetail;
