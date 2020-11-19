import React, { Component } from 'react';
import { UserDetailComponentStyle } from '../style/components';

export class UserDetail extends Component {
  render() {
    const {avatar,name,profile,following,followers} = this.props
    return <UserDetailComponentStyle>
      <div className="profile-img-container">
        <img src={avatar} alt=""/>
      </div>
      <div>
        <div className="name-container">
        <p>{name}</p>
        <a href={profile} rel="noreferrer" target="_blank" >Visit Github</a>
        </div>
        <div className="follow-count">
          <p className="followers">{followers} <br/> <span className="follow-label">Followers</span> </p>
          <p className="following">{following} <br/> <span className="follow-label">Following</span></p>
        </div>
      </div>
    </UserDetailComponentStyle>;
  }
}

export default UserDetail;
