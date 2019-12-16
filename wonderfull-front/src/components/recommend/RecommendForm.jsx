import React from "react";

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




{/* Step 3 inputs MOVE LATER  */}

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <div class="uk-grid-small uk-child-width-1-2@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-icons-checkbox betterAtDay"><input id="category1" type="radio" name="category1" className=""/> Daytime</label>
            </div>
            <div>
              <label className="form-icons-checkbox betterAtNight"><input id="category2" type="radio" name="category1" className=""/> Night</label>
            </div>        
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-small-bottom">Ideal time of the year</p>
          <div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-text-checkbox"><input id="category1" type="radio" name="category1" className=""/> Daytime</label>
            </div>
            <div>
              <label className="form-text-checkbox"><input id="category2" type="radio" name="category1" className=""/> Night</label>
            </div>        
          </div>
        </div>
      </div>

          
{/* Step 3 inputs MOVE LATER  */}



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
    
    </div>
    ) : null}

    {/* Step 4 inputs */} 
    {action === "step3" ? (
    <div> 
    
    </div>
    ) : null}
    
    {/* Step 5 inputs */} 
    {action === "step4" ? (
    <div> 
    
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
