import React from 'react';

import { add, addComments } from '../../strings';
import userImage from '../../../../../assets/ASSETS/frank.jpg';
import '../../styles.css';

function NewComment() {
  return (
    <div className="new-comment-container ">
      <img className="new-comment-user" src={userImage} alt="user" />
      <div className="to-comment-container new-comment-height  ">
        <h2 className="new-comment-title">{addComments}</h2>
        <textarea className="new-comment-text new-comment-border" />
        <button className="new-comment-add">{add}</button>
      </div>
    </div>
  );
}

export default NewComment;
