import React from 'react';
import { Link } from 'react-router-dom';
import forward from '../assets/chevron-forward.svg';
import { UserStyle } from '../style/components';

const User = (props) => {
  const { login, list, avatar, id } = props;
  return (
    <UserStyle>
      <div className={` user ${list ? 'user-list' : 'user-grid'}`}>
        <div className={`details ${list ? 'details-list' : 'details-grid'}`}>
          <div className='avatar-container'>
            <img src={avatar} alt='' />
          </div>
          <div>
            <p className='login'>{login}</p>
            <p className='id-number'>ID Number: {id}</p>
          </div>
        </div>
        <Link className={`btn btn-active ${list ? 'btn-m-100' : 'btn-100'}`} to={`/user/${login}`}>
          See more
          <img src={forward} alt='' />
        </Link>
      </div>
    </UserStyle>
  );
};

export default User;
