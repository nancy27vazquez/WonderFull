import React, { handleChange } from "react";
import RecommendForm from "./RecommendForm";
/*import { AppContext } from "../../AppContext";
import useForm from "../../hooks/useForm";*/
import UIkit from "uikit";

const Step8 = () => {
  /*
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();
  */

  /* Progress var animation */
  UIkit.util.ready(function() {
    var bar = document.getElementById("js-progressbar");
    var animate = setInterval(function() {
      bar.value += 10;
      if (bar.value >= bar.max) {
        clearInterval(animate);
      }
    }, 1000);
  });

  return (
    <div
      className="uk-section uk-flex uk-flex-middle"
      uk-height-viewport="offset-top: true"
    >
      <div className="uk-width-1-1">
        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div className=" uk-margin-auto uk-flex">
            <RecommendForm action="Finish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;
