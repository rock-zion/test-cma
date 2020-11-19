import React, { Component } from 'react';
import { UserDetailStyle } from '../style/userdetails';
import UserDetail from '../components/UserDetail';
import MoreInfo from '../components/MoreInfo';
import { connect } from 'react-redux';
import { singleUser } from '../redux/actions/singleUser';

export class UserDetails extends Component {
  componentDidMount() {
    const data = this.props.location.state.url;
    this.props.singleUser(data);
  }
  render() {
    const {
      name,
      avatar_url,
      followers,
      following,
      twitter_username,
      html_url,
      company,
      blog,
      email
    } = this.props.user;
    console.log(this.props.user);
    return (
      <UserDetailStyle>
        <section className='container'>
          <UserDetail
            avatar={avatar_url}
            profile={html_url}
            name={name}
            followers={followers}
            following={following}
          />
          <MoreInfo email={email} blog={blog} company={company} twitter={twitter_username} />
        </section>
      </UserDetailStyle>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.getUser.user,
  };
};
export default connect(mapStateToProps, { singleUser })(UserDetails);
