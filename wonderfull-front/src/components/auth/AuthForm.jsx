import React from "react";

const AuthForm = ({
  submit,
  action,
  email = "",
  password = "",
  username = "",
  handleChange
}) => (
  <form className="uk-form-stacked" onSubmit={submit}>

    {action === "signup" ? (
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
    ) : null}


    <div className="uk-margin">
      <div className="uk-inline">
        <span className="uk-form-icon" uk-icon="icon: mail"></span>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          className="uk-input uk-border-rounded auth-input "
          type="email"
          placeholder="Email"
        />
      </div>
    </div>

    <div className="uk-margin">
      <div className="uk-inline">
        <span className="uk-form-icon" uk-icon="icon: lock"></span>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          className="uk-input uk-border-rounded auth-input "
          type="password"
          placeholder="password"
        />
      </div>
    </div>
    <button className="uk-button uk-button-primary" type="submit">
      {action}
    </button>
  </form>
);

export default AuthForm;
