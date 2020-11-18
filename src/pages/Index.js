import React, { Component } from 'react';
import { HomeStyle } from '../style/home';
import MainContainer from '../components/MainContainer';
import activeListImg from '../assets/active-list.svg';
import inactiveListImg from '../assets/inactive-list.svg';
import activeGridImg from '../assets/active-grid.svg';
import inactiveGridImg from '../assets/inactive-grid.svg';
import forward from '../assets/chevron-forward.svg'
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/getUsers';
import { Link } from 'react-router-dom';

export class Index extends Component {
  state = {
    list: true,
    grid: false,
  };

  componentDidMount = () => {
    this.props.getUser();
  };

  switchToList = () => {
    this.setState({
      list: true,
      grid: false,
    });
  };

  switchToGrid = () => {
    this.setState({
      list: false,
      grid: true,
    });
  };

  render() {
    const { list, grid } = this.state;
    const { users } = this.props;
    return (
      <HomeStyle>
        <MainContainer>
          <div className='top-bar'>
            <button
              onClick={this.switchToList}
              className={`btn btn-toggle-view ${
                list ? 'btn-active' : 'btn-inactive'
              }`}
            >
              <img
                className='btn-toggle-view'
                src={list ? activeListImg : inactiveListImg}
                alt='button icon'
              />{' '}
              List View
            </button>
            <button
              onClick={this.switchToGrid}
              className={`btn btn-toggle-view ${
                grid ? 'btn-active' : 'btn-inactive'
              }`}
            >
              <img
                className='btn-toggle-view'
                src={grid ? activeGridImg : inactiveGridImg}
                alt='button icon'
              />
              Grid View
            </button>
          </div>

          <div className={` users-container ${list ? 'users-container-list': 'users-container-grid'}`}>
            {users.map((user) => (
              <div key={user.node_id} className={` user ${list ? 'user-list' : 'user-grid'}`}>
                <div className={`details ${list ?'': 'details-grid'}`} >
                  <div className='avatar-container'>
                    <img src={user.avatar_url} alt='' />
                  </div>
                  <div>
                    <p className="login">{user.login}</p>
                    <p className="id-number">ID Number: {user.node_id}</p>
                  </div>
                </div>
                <Link className={`btn btn-active ${list?'':'btn-100'}`} to=''>
                  See more 
                  <img src={forward} alt=""/>
                </Link>
              </div>
            ))}
          </div>
        </MainContainer>
      </HomeStyle>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.getUsers.users,
  };
};

export default connect(mapStateToProps, { getUser })(Index);
