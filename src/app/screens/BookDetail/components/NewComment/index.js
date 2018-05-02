import React from 'react';

import userImage from '../../../../../assets/ASSETS/frank.jpg';
import '../../styles.css';

function NewComment() {
  return (
    <div className="new-comment-container ">
      <img className="new-comment-user" src={userImage} alt="user" />
      <div className="to-comment-container new-comment-height  ">
        <h2 className="new-comment-title">Agregar comnetarios</h2>
        <textarea className="new-comment-text new-comment-border" />
        <button className="new-comment-add">Agregar</button>
      </div>
    </div>
  );
}

export default NewComment;
