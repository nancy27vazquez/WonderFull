import React, {handleChange} from "react";
import UIkit from "uikit";

const Step1 = () => {

  UIkit.util.ready(function () {
    var bar = document.getElementById('js-progressbar');
    var animate = setInterval(function () {
        bar.value += 10;
        if (bar.value >= bar.max) { 
            clearInterval(animate);
        }
    }, 1000);
  });

  return (
    <div class="uk-section uk-flex uk-flex-middle" uk-height-viewport="offset-top: true">
      <div class="uk-width-1-1">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div class=" uk-margin-auto ">
            <h2 className="uk-margin-remove-bottom">Recommend a WonderFull place</h2>
            <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Let others discover an amazing place</p>

            <div className="uk-container uk-flex uk-flex-center uk-margin-medium-bottom">              
              <div className=" uk-margin uk-inline uk-width-1-1">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input
                  onChange={handleChange}
                  name="username"
                  value=""
                  className="uk-input uk-border-rounded auth-input"
                  type="text"
                  placeholder="Wonder name"
                />
              </div>
            </div>

            <div className="uk-container uk-flex uk-flex-between uk-margin-medium-bottom">              
              <div className=" uk-inline uk-width-1-1">
                <span className="uk-form-icon" uk-icon="icon: world"></span>
                <input
                  onChange={handleChange}
                  name="country"
                  value=""
                  className="uk-input uk-border-rounded auth-input"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className=" uk-inline uk-width-1-1">
                <span className="uk-form-icon" uk-icon="icon: world"></span>
                <input
                  onChange={handleChange}
                  name="state"
                  value=""
                  className="uk-input uk-border-rounded auth-input"
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>

            <div className="uk-container uk-flex uk-flex-center uk-margin-medium-bottom">              
              <div className=" uk-margin uk-inline uk-width-1-1">
                <h3>mapa aqui</h3>                
              </div>
            </div>  

            <a class="uk-button uk-button-default" href="#">Next</a>

            <progress id="js-progressbar" class="uk-progress" value="0" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
