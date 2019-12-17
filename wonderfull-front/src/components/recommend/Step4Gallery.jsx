import React, {handleChange} from "react";
import RecommendForm from "./RecommendForm";
/*import { AppContext } from "../../AppContext";
import useForm from "../../hooks/useForm";*/
import UIkit from "uikit";

const Step4 = () => {
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

  /* File upload scripts */
  var bar = document.getElementById('js-progressbar');

    UIkit.upload('.js-upload', {

        url: '',
        multiple: true,

        beforeSend: function () {
            console.log('beforeSend', arguments);
        },
        beforeAll: function () {
            console.log('beforeAll', arguments);
        },
        load: function () {
            console.log('load', arguments);
        },
        error: function () {
            console.log('error', arguments);
        },
        complete: function () {
            console.log('complete', arguments);
        },

        loadStart: function (e) {
            console.log('loadStart', arguments);

            bar.removeAttribute('hidden');
            bar.max = e.total;
            bar.value = e.loaded;
        },

        progress: function (e) {
            console.log('progress', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
        },

        loadEnd: function (e) {
            console.log('loadEnd', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
        },

        completeAll: function () {
            console.log('completeAll', arguments);

            setTimeout(function () {
                bar.setAttribute('hidden', 'hidden');
            }, 1000);

            alert('Upload Completed');
        }

    });

  return (
    <div className="uk-section uk-flex uk-flex-middle" uk-height-viewport="offset-top: true">
      <div className="uk-width-1-1">
        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div className=" uk-margin-auto ">
            <h2 className="uk-margin-remove-bottom">Eyes to see, heart to feel...</h2>
            <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Upload the wonder best photos to make others fall in love</p>

            <RecommendForm 
              action="Next"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
