import React from 'react';

import userImage from '../../../../../assets/ASSETS/frank.jpg';
import { description, date, user } from '../../strings';
import './styles.css';

function Comments() {
  return (
    <div className="new-comment-container">
      <img className="new-comment-user" src={userImage} alt="user" />
      <div className="to-comment-container">
        <h2 className="new-comment-title">{user}</h2>
        <h4 className="new-comment-text">{date}</h4>
        <h3 className="new-comment-text">{description}</h3>
      </div>
    </div>
  );
}

export default Comments;
