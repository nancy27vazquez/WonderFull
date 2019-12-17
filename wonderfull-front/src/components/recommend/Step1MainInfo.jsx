import React, {handleChange} from "react";
import RecommendForm from "./RecommendForm";
/*import { AppContext } from "../../AppContext";
import useForm from "../../hooks/useForm";*/
import UIkit from "uikit";

const Step1 = () => {
  /*
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();
  */

  /* Progress var animation */
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
    <div className="uk-section uk-flex uk-flex-middle" uk-height-viewport="offset-top: true">
      <div className="uk-width-1-1">
        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div className=" uk-margin-auto ">
            <h2 className="uk-margin-remove-bottom">Recommend a WonderFull place</h2>
            <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Let others have an amazing experience</p>

            <RecommendForm 
              action="Next"
            />

            <progress id="js-progressbar" className="uk-progress" value="0" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
