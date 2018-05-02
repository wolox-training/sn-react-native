import React from 'react';

import userImage from '../../../../../assets/ASSETS/frank.jpg';
import '../../styles.css';

function Comments() {
  return (
    <div className="new-comment-container">
      <img className="new-comment-user" src={userImage} alt="user" />
      <div className="to-comment-container">
        <h2 className="new-comment-title">Agregar comnetarios</h2>
        <h4 className="new-comment-text">xx/xx/xx</h4>
        <h3 className="new-comment-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h3>
      </div>
    </div>
  );
}

export default Comments;
