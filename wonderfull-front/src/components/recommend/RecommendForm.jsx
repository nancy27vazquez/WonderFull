import React from "react";
import UIkit from "uikit";

{/* STEP 3 UPLOADER SCRIPTS */}
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
{/* STEP 3 UPLOADER SCRIPTS */}

const RecommendForm = ({
  action,
  username = "",
  handleChange
}) => (
  <form className="uk-form-stacked uk-margin">

   {/* Step 1 default inputs */}
    
   {/*
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
   */}




{/* Step 6 inputs MOVE LATER  */}

          
{/* Step 6 inputs MOVE LATER  */}



    {/* Step 2 inputs */} 
    {action === "step1" ? (
    <div> 
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-icons-checkbox category1"><input id="category1" type="radio" name="category1" className=""/> Mountain</label>
            </div>
            <div>
              <label className="form-icons-checkbox category2"><input id="category2" type="radio" name="category1" className=""/> Beach</label>
            </div>
            <div>
              <label className="form-icons-checkbox category3"><input id="category3" type="radio" name="category1" className=""/> Explore</label>
            </div>
            <div>
              <label className="form-icons-checkbox category4"><input id="category4" type="radio" name="category1" className=""/> Urban</label>
            </div>         
          </div>
        </div>
      </div>

      <div className="uk-margin-large">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-small-bottom">Rate the full experience for future travelers</p>
          <div class="uk-flex uk-align-center uk-grid-small uk-child-width-1-5@s uk-flex-center uk-text-center uk-grid uk-width-medium" uk-grid="">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <span className="uk-form-icon" uk-icon="icon: pencil"></span>
          <textarea
            onChange={handleChange}
            name="description"
            className="uk-input uk-border-rounded generic-input generic-input-textarea"
            type="textarea"
            placeholder="Describe the wonder with detail"
            rows="5"
          />
        </div>
      </div>
    </div>
    ) : null}

    {/* Step 3 inputs */} 
    {action === "step2" ? (
    <div> 
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <div class="uk-grid-small uk-child-width-1-2@s uk-flex-center uk-text-center uk-grid uk-margin-bottom" uk-grid="">
            <div>
              <label className="form-icons-checkbox betterAtDay"><input id="day" type="radio" name="daytime" className=""/> Daytime</label>
            </div>
            <div>
              <label className="form-icons-checkbox betterAtNight"><input id="night" type="radio" name="daytime" className=""/> Night</label>
            </div>        
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-small-bottom">Ideal time of the year</p>
          <div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-text-checkbox"><input id="months1" type="radio" name="month" className="uk-hidde"/> Jan - Mar</label>
            </div>
            <div>
              <label className="form-text-checkbox"><input id="months2" type="radio" name="month" className="uk-hidde"/> Apr - Jun</label>
            </div> 
            <div>
              <label className="form-text-checkbox"><input id="months3" type="radio" name="month" className="uk-hidde"/> Jul - Sept</label>
            </div>
            <div>
              <label className="form-text-checkbox"><input id="months4" type="radio" name="month" className="uk-hidde"/> Oct - Dec</label>
            </div>        
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-small-bottom">Ideal time of the year</p>
          <div class="uk-grid-small uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day1" type="radio" name="day" className="uk-hidde"/> Sun</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day2" type="radio" name="day" className="uk-hidde"/> Mon</label>
            </div> 
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day3" type="radio" name="day" className="uk-hidde"/> Tues</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day4" type="radio" name="day" className="uk-hidde"/> Wed</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day5" type="radio" name="day" className="uk-hidde"/> Thur</label>
            </div> 
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day6" type="radio" name="day" className="uk-hidde"/> Fri</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day7" type="radio" name="day" className="uk-hidde"/> Sat</label>
            </div>        
          </div>
        </div>
      </div>
    </div>
    ) : null}

    {/* Step 4 inputs */} 
    {action === "step3" ? (
    <div> 
      <div class="js-upload uk-placeholder uk-text-center">
        <span uk-icon="icon: cloud-upload"></span>
        <span class="uk-text-middle">Attach binaries by dropping them here or</span>
        <div uk-form-custom>
            <input type="file" multiple />
            <span class="uk-link">selecting one</span>
        </div>
      </div>
      <progress id="js-progressbar" class="uk-progress" value="0" max="100" hidden></progress>
    </div>
    ) : null}
    
    {/* Step 5 inputs */} 
    {action === "step4" ? (
    <div> 
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <div class="uk-grid-small uk-child-width-1-6@s uk-flex-center uk-text-center uk-margin-medium-bottom" uk-grid="">
            <div className="">
              <label className="form-text-checkbox"><input id="tag1" type="checkbox" name="tags" className="uk-hidden"/> travel</label>
            </div>
            <div className="">
              <label className="form-text-checkbox"><input id="tag2" type="checkbox" name="tags" className="uk-hidden"/> nature</label>
            </div> 
            <div className="">
              <label className="form-text-checkbox"><input id="tag3" type="checkbox" name="tags" className="uk-hidden"/> explore</label>
            </div>
            <div className="">
              <label className="form-text-checkbox"><input id="tag4" type="checkbox" name="tags" className="uk-hidden"/> romantic</label>
            </div> 
            <div className="">
              <label className="form-text-checkbox"><input id="tag5" type="checkbox" name="tags" className="uk-hidden"/> familiar</label>
            </div>
            <div className="">
              <label className="form-text-checkbox"><input id="tag6" type="checkbox" name="tags" className="uk-hidden"/> landscape</label>
            </div>
            <div className="">
              <label className="form-text-checkbox"><input id="tag7" type="checkbox" name="tags" className="uk-hidden"/> travel alone</label>
            </div>
            <div className="">
              <label className="form-text-checkbox"><input id="tag8" type="checkbox" name="tags" className="uk-hidden"/> wild</label>
            </div>            
          </div>
        </div>
      </div>
      
      <div className="uk-margin uk-margin-medium-bottom">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-medium-bottom">How to get there & nearest transportation </p>
          <div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-icons-checkbox form-icon-medium  transport1"><input id="transport1" type="checkbox" name="transportation" className=""/> Car</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium  transport2"><input id="transport2" type="checkbox" name="transportation" className=""/> Bus</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium  transport4"><input id="transport4" type="checkbox" name="transportation" className=""/> Train</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium  transport6"><input id="transport6" type="checkbox" name="transportation" className=""/> Walking</label>
            </div>         
          </div>
        </div>
      </div>
    
      <div>
      <p className="uk-text-lead uk-margin-small-bottom">How much does it costs </p>
        <div className="uk-inline uk-width-large uk-margin-medium-bottom">
          <span className="uk-form-icon" uk-icon="icon: credit-card"></span>
          <input
            onChange={handleChange}
            name="Entry price"
            value=" $ {Entry price}"
            className="uk-input uk-border-rounded generic-input"
            type="text"
            placeholder="Entry price"
          />
        </div>
      </div> 
    </div>
    ) : null}
    
    {/* Step 6 inputs */} 
    {action === "step5" ? (
    <div> 
      
    </div>
    ) : null}

    {/* Step 7 inputs */} 
    {action === "step6" ? (
    <div> 
    
    </div>
    ) : null}

    {/* Step 8 inputs */} 
    {action === "step7" ? (
    <div> 
    
    </div>
    ) : null}


    <button className="uk-button uk-button-primary uk-border-rounded uk-margin-large-bottom" type="submit">
      {action}
    </button>
  </form>
);

export default RecommendForm;
