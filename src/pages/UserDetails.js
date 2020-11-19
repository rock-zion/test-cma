import React, { Component } from 'react'
import MainContainer from '../components/MainContainer'
import {UserDetailStyle} from '../style/userdetails'
import UserDetail from '../components/UserDetail'
import MoreInfo from '../components/MoreInfo'

export class UserDetails extends Component {
  render() {
    return (
      <UserDetailStyle>
        <section className="container">
          <UserDetail />
          <MoreInfo />
        </section>
      </UserDetailStyle>
    )
  }
}
export default UserDetails
