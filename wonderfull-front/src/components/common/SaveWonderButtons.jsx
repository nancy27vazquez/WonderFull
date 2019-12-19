import React from "react";

const SaveWonderButtons = () => {
  return (
    <div className="uk-card-badge uk-light">
      <span
        className="uk-margin-small-right save-wonder-button"
        uk-icon="star"
        id="tofavorites"
      ></span>
      <span
        className="uk-margin-small-right save-wonder-button"
        uk-icon="heart"
        id="tonexttrip"
      ></span>
    </div>
  );
};

export default SaveWonderButtons;
