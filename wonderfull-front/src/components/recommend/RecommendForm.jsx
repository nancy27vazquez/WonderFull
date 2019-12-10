import React from "react";

const RecommendForm = ({
  action,
  username = "",
  handleChange
}) => (
  <form className="uk-form-stacked">

    <div className="uk-margin">
      <div className="uk-inline">
        <span className="uk-form-icon" uk-icon="icon: user"></span>
        <input
          onChange={handleChange}
          name="username"
          value={username}
          className="uk-input uk-border-rounded auth-input "
          type="text"
          placeholder="Username"
        />
      </div>
    </div>

    <button className="uk-button uk-button-primary" type="submit">
      {action}
    </button>
  </form>
);

export default RecommendForm;
