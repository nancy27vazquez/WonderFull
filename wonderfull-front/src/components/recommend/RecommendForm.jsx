import React from "react";
import UIkit from "uikit";
import CardMinimal from "../common/CardMinimal";



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
            className="uk-input uk-border-rounded generic-input"
            type="text"
            placeholder="State"
          />
        </div>
      </div>
    </div>

    {/* <div className="uk-margin">
      <div className="uk-inline uk-width-1-1">
        <div className="uk-height-small uk-light uk-margin-small-bottom uk-background-secondary">mapa aqui</div>
      </div>
    </div>
   */}

          <div className=" uk-margin-large ">
            <h2 className="uk-margin-remove-bottom">Type of wonder</h2>
            <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Choose the categorie that best suits with it</p>

    <div> 
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <div className="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-icons-checkbox category1"><input id="category1" type="radio" name="category1" className="uk-hidden"/> Mountain</label>
            </div>
            <div>
              <label className="form-icons-checkbox category2"><input id="category2" type="radio" name="category1" className="uk-hidden"/> Beach</label>
            </div>
            <div>
              <label className="form-icons-checkbox category3"><input id="category3" type="radio" name="category1" className="uk-hidden"/> Explore</label>
            </div>
            <div>
              <label className="form-icons-checkbox category4"><input id="category4" type="radio" name="category1" className="uk-hidden"/> Urban</label>
            </div>         
          </div>
        </div>
      </div>

      <div className="uk-margin-large">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-small-bottom">Rate the full experience for future travelers</p>
          <div className="uk-flex uk-align-center uk-grid-small uk-child-width-1-5@s uk-flex-center uk-text-center uk-grid uk-width-medium" uk-grid="">
          <span className="fa fa-big fa-star"></span>
            <span className="fa fa-big fa-star"></span>
            <span className="fa fa-big fa-star"></span>
            <span className="fa fa-big fa-star"></span>
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
</div>

<div className=" uk-margin-large ">
            <h2 className="uk-margin-remove-bottom">There's always a special moment</h2>
            <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Choose the perfect time to witness it</p>

    <div> 
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <div className="uk-grid-small uk-child-width-1-2@s uk-flex-center uk-text-center uk-grid uk-margin-bottom" uk-grid="">
            <div>
              <label className="form-icons-checkbox betterAtDay"><input id="day" type="radio" name="daytime" className="uk-hidden"/> Daytime</label>
            </div>
            <div>
              <label className="form-icons-checkbox betterAtNight"><input id="night" type="radio" name="daytime" className="uk-hidden"/> Night</label>
            </div>        
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-small-bottom">Ideal time of the year</p>
          <div className="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-text-checkbox"><input id="months1" type="radio" name="month" className="uk-hidden"/> Jan - Mar</label>
            </div>
            <div>
              <label className="form-text-checkbox"><input id="months2" type="radio" name="month" className="uk-hidden"/> Apr - Jun</label>
            </div> 
            <div>
              <label className="form-text-checkbox"><input id="months3" type="radio" name="month" className="uk-hidden"/> Jul - Sept</label>
            </div>
            <div>
              <label className="form-text-checkbox"><input id="months4" type="radio" name="month" className="uk-hidden"/> Oct - Dec</label>
            </div>        
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
        <p className="uk-text-lead uk-margin-small-bottom">Ideal time of the year</p>
          <div className="uk-grid-small uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day1" type="radio" name="day" className="uk-hidden"/> Sun</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day2" type="radio" name="day" className="uk-hidden"/> Mon</label>
            </div> 
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day3" type="radio" name="day" className="uk-hidden"/> Tues</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day4" type="radio" name="day" className="uk-hidden"/> Wed</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day5" type="radio" name="day" className="uk-hidden"/> Thur</label>
            </div> 
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day6" type="radio" name="day" className="uk-hidden"/> Fri</label>
            </div>
            <div className="uk-width-expand">
              <label className="form-text-checkbox"><input id="day7" type="radio" name="day" className="uk-hidden"/> Sat</label>
            </div>        
          </div>
        </div>
      </div>
    </div>
    </div>


    <div className=" uk-margin-large ">
            <h2 className="uk-margin-remove-bottom">Eyes to see, heart to feel...</h2>
            <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Upload the wonder best photos to make others fall in love</p>

    <div> 
      <div className="js-upload uk-placeholder uk-text-center">
        <span uk-icon="icon: cloud-upload"></span>
        <span className="uk-text-middle">Attach binaries by dropping them here or</span>
        <div uk-form-custom>
            <input type="file" multiple />
            <span className="uk-link">selecting one</span>
        </div>
      </div>
      <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden></progress>
    </div>
    </div>

    {/* Step 5 inputs */} 
    {action === "step4" ? (
    <div> 
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <div className="uk-grid-small uk-child-width-1-6@s uk-flex-center uk-text-center uk-margin-medium-bottom" uk-grid="">
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
          <div className="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
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
      <div className="uk-margin ">
        <div className="uk-inline uk-margin-medium-bottom uk-width-1-1">
          <span className="uk-form-icon" uk-icon="icon: star"></span>
          <input
            onChange={handleChange}
            name="Superhighlight"
            value="{Superhighlight}"
            className="uk-input uk-border-rounded generic-input"
            type="text"
            placeholder="Write a very unique highlight of this place"
          />
        </div>
      </div>
      <div className="uk-margin">
      <p className="uk-text-lead uk-margin-medium-bottom">Advise first time travelers to improve their experience </p>
        <div className="uk-inline uk-width-1-1 uk-flex uk-justify-center">
          <div className="uk-grid-small width-xlarge uk-child-width-1-5@s uk-flex-center uk-text-center uk-grid uk-margin-bottom" uk-grid="">
            <div>
              <label className="form-icons-checkbox form-icon-medium high1"><input id="high1" type="checkbox" name="highlights" className="uk-hidden"/>Sunblock needed</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium high2"><input id="high2" type="checkbox" name="highlights" className="uk-hidden"/>Pet friendly</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium high3"><input id="high3" type="checkbox" name="highlights" className="uk-hidden"/>Long walk</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium high4"><input id="high4" type="checkbox" name="highlights" className="uk-hidden"/>Climbing equipment</label>
            </div> 
            <div>
              <label className="form-icons-checkbox form-icon-medium high5"><input id="high5" type="checkbox" name="highlights" className="uk-hidden"/>Small luggage</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium high6"><input id="high6" type="checkbox" name="highlights" className="uk-hidden"/>ID needed</label>
            </div> 
            <div>
              <label className="form-icons-checkbox form-icon-medium high7"><input id="high7" type="checkbox" name="highlights" className="uk-hidden"/>Dangerous at night</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium high8"><input id="high8" type="checkbox" name="highlights" className="uk-hidden"/>Comfortable clothes</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium high9"><input id="high9" type="checkbox" name="highlights" className="uk-hidden"/>Winter clothes</label>
            </div>
            <div>
              <label className="form-icons-checkbox form-icon-medium high10"><input id="high10" type="checkbox" name="highlights" className="uk-hidden"/>Rainy place</label>
            </div>        
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1 uk-margin-bottom">
        <p className="uk-text-lead uk-margin-medium-bottom">Prohibitions </p>
          <div className="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-grid" uk-grid="">
            <div>
              <label className="form-icons-checkbox prohibit1"><input id="prohibit1" type="checkbox" name="prohibitions" className="uk-hidden"/>No kids</label>
            </div>
            <div>
              <label className="form-icons-checkbox  prohibit2"><input id="prohibit2" type="checkbox" name="prohibitions" className="uk-hidden"/>No cameras</label>
            </div>      
            <div>
              <label className="form-icons-checkbox  prohibit3"><input id="prohibit3" type="checkbox" name="prohibitions" className="uk-hidden"/>No pets</label>
            </div>
            <div>
              <label className="form-icons-checkbox  prohibit4"><input id="prohibit4" type="checkbox" name="prohibitions" className="uk-hidden"/>No food</label>
            </div>
          </div>
        </div>
      </div>

    </div>
    ) : null}

    {/* Step 7 inputs */} 
    {action === "step6" ? (
    <div>
      <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
          <span className="uk-form-icon" uk-icon="icon: world"></span>
          <input
            onChange={handleChange}
            name="Website"
            value="{Website}"
            className="uk-input uk-border-rounded generic-input"
            type="text"
            placeholder="Website"
          />
        </div>
      </div>

      <div className="uk-flex uk-flex-between uk-margin-medium-bottom uk-child-width-1-2"> 
        <div className="uk-margin-small-right">
          <div className="uk-inline uk-width-1-1">
            <span className="uk-form-icon" uk-icon="icon: phone"></span>
            <input
              onChange={handleChange}
              name="Phone number"
              value="{PhoneNumber}"
              className="uk-input uk-border-rounded generic-input"
              type="text"
              placeholder="Phone number"
            />
          </div>
        </div>

        <div>
          <div className="uk-inline uk-width-1-1">
            <span className="uk-form-icon" uk-icon="icon: mail"></span>
            <input
              onChange={handleChange}
              name="Mail"
              value="{Mail}"
              className="uk-input uk-border-rounded generic-input"
              type="text"
              placeholder="Mail"
            />
          </div>
        </div>
      </div> 
    </div>
    ) : null}

    {/* Step 8 inputs */} 
    {action === "step7" ? (
    <div> 
      <div className="uk-margin uk-grid uk-grid-small">
        <div className="uk-flex uk-flex-between uk-margin-medium-bottom uk-child-width-1-2 uk-flex-middle"> 
          <div className="uk-margin-small-right">
            <div className="uk-inline uk-width-1-1">

              <CardMinimal />

            </div>
          </div>

          <div>
            <div className="uk-inline uk-width-1-1">
            <img
                src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576516253/WonderFull/luggage_nobkxe.png"
                width="90"
              />
              <h2 className="uk-margin-small-bottom">Your Wonder is ready!</h2>
              <p className="uk-text-lead uk-margin-remove-top uk-margin-medium-bottom">
                Now more travelers can discover this brand new place
              </p>
              <button className="uk-button uk-button-primary uk-border-rounded uk-margin-large-bottom" type="submit">See ful detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) : null}


    <button className="uk-button uk-button-primary uk-border-rounded uk-margin-large-bottom" type="submit">
      {action}
    </button>
  </form>
);

export default RecommendForm;
