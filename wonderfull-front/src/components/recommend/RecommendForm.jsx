import React from "react";

const RecommendForm = ({
  action,
  username = "",
  handleChange
}) => (
  <form className="uk-form-stacked uk-margin">

   {/* Step 1 default inputs */} 
    <div className="uk-margin">
      <div className="uk-inline uk-width-1-1">
        <span className="uk-form-icon" uk-icon="icon: user"></span>
        <input
          onChange={handleChange}
          name="Wonder Name"
          value="{wonderName}"
          className="uk-input uk-border-rounded generic-input"
          type="text"
          placeholder="Wonder name"
        />
      </div>
    </div>

    <div className="uk-flex uk-flex-between uk-margin-medium-bottom uk-child-width-1-2"> 
      <div className="uk-margin-small-right">
        <div className="uk-inline uk-width-1-1">
          <span className="uk-form-icon" uk-icon="icon: world"></span>
          <input
            onChange={handleChange}
            name="Country"
            value="{Country}"
            className="uk-input uk-border-rounded generic-input"
            type="text"
            placeholder="Country"
          />
        </div>
      </div>

      <div>
        <div className="uk-inline uk-width-1-1">
          <span className="uk-form-icon" uk-icon="icon: world"></span>
          <input
            onChange={handleChange}
            name="State"
            value="{State}"
            className="uk-input uk-border-rounded generic-input"
            type="text"
            placeholder="State"
          />
        </div>
      </div>
    </div>

    <div className="uk-margin">
      <div className="uk-inline uk-width-1-1">
        <div className="uk-height-small uk-light uk-margin-small-bottom uk-background-secondary">mapa aqui</div>
      </div>
    </div>  




    {/* Step 2 inputs */} 

    {action === "step1" ? (
      <div className="uk-margin">
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user"></span>
          <input
            name="otra pruebita"
            value="{otra pruebita}"
            className="uk-input uk-border-rounded auth-input "
            type="number"
            placeholder="666"
          />
        </div>
      </div>
    ) : null}


    <button className="uk-button uk-button-primary uk-border-rounded" type="submit">
      {action}
    </button>
  </form>
);

export default RecommendForm;
