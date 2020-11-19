import React, { Component } from 'react';
import { HomeStyle } from '../style/home';
import MainContainer from '../components/MainContainer';
import activeListImg from '../assets/active-list.svg';
import inactiveListImg from '../assets/inactive-list.svg';
import activeGridImg from '../assets/active-grid.svg';
import inactiveGridImg from '../assets/inactive-grid.svg';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/getUsers';
import User from '../components/User'

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
              <User 
                key={user.node_id}
                list={this.state.list}
                grid={this.state.grid}
                login={user.login}
                id={user.node_id}
                avatar={user.avatar_url}
                url={user.url}
              />
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
