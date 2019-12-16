import React, {handleChange} from "react";
import RecommendForm from "./RecommendForm";
/*import { AppContext } from "../../AppContext";
import useForm from "../../hooks/useForm";*/
import UIkit from "uikit";

const Step6 = () => {
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
    <div class="uk-section uk-flex uk-flex-middle" uk-height-viewport="offset-top: true">
      <div class="uk-width-1-1">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div class=" uk-margin-auto ">
            <h2 className="uk-margin-remove-bottom">Give your best advice</h2>
            <p className="uk-text-lead uk-margin-remove-top uk-margin-medium-bottom">Advise first time travelers to improve their experience</p>

            <RecommendForm 
              action="Next"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
