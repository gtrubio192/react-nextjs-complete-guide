import React from 'react'
import classes from './UserList.module.css';

const UserList = ({users}) => {
    return (
      <div className={classes.users}>
        <ul>
          {
            users.map(user => (
              <li key={`${user.name}-${user.age}`}>
                {user.name} - {user.age}
              </li>
            ))
          }
        </ul>        
      </div>

    );
}

export default UserList;
