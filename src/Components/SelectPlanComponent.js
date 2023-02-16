import React, { useState, createContext, useContext, useEffect } from "react";

import "../styles/SelectPlanComponent.css";

import arcadeIcon from "../images/icon-arcade.svg";
import advancedIcon from "../images/icon-advanced.svg";
import proIcon from "../images/icon-pro.svg";
import AddOnsComponent from "./AddOnsComponent.js";
import { ButtonContext } from "../ButtonContext.js";

const SelectPlanComponent = (props) => {
  const [active, setActive] = useState(false);

  const [plan, setPlan] = useState("monthly");

  const handleMonthlyPlan = () => {
    setPlan("monthly");
  };

  const handleYearlyPlan = () => {
    setPlan("yearly");
  };

  const [buttonValue, setButtonValue] = useState('Monthly')

  const handleRightClick = () => {
    setActive(true);
    // Call function for right click
    handleYearlyPlan();

    setButtonValue("Yearly")
  };

  const handleLeftClick = () => {
    setActive(false);
    // Call function for left click
    handleMonthlyPlan();

    setButtonValue('Monthly')
  };

  console.log(buttonValue);

  /*   const inputRef = useRef(null)

  function handleClick() {
    const inputElement = inputRef.current;
    const inputValue = inputElement.value;
    console.log(inputValue);
  } */

  const [nextBtn, seNextBtn] = useState(false);

  const handleNext = () => {
    seNextBtn(true);
  };

  const [showAddOnsComponent, setShowAddOnsComponent] = useState(false)

  function handleChildStateChange(clicked) {
    if (clicked && nextBtn) {
      setShowAddOnsComponent(true)
    };
  }

  return (
    <section className="select-your-plan">
      {nextBtn && showAddOnsComponent && <AddOnsComponent buttonValue={buttonValue}/>}
      <article>
        <div className="description">
          <h2>Select your plan</h2>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div>
          {plan === "monthly" && (
            <MonthlyPlan 
              nextBtn={nextBtn}
              onStateChange={handleChildStateChange}
            />
          )}
        </div>
        {plan === "yearly" && (<YearlyPlan 
          nextBtn={nextBtn}
          onStateChange={handleChildStateChange}
          />
        )}
        <div className="choose-monthly-yearly">
          <p>Monthly</p>
          {/* <ButtonContext.Provider></ButtonContext.Provider> */}
          <button
            className="dot-button"
            onClick={active ? handleLeftClick : handleRightClick}
            value={active ? "Yearly" : "Monthly"}

            /* ref={inputRef} */
          >
            <div className={`dot ${active ? "active" : ""}`} />
          </button>
          <p>Yearly</p>
        </div>
        <div className="next-back-button">
          <button className="go-back-btn" onClick={props.handleYourInfoClick}>
            Go Back
          </button>
          <button id="next-step-btn" onClick={handleNext}>
            Next Step
          </button>
        </div>
      </article>
    </section>
  );
};

function MonthlyPlan(props) {
  /*   const onFinish = (event) => {
    let id = event.target.id;

    if (id === "arcade-option") {
      
    }
    else if (id === "advanced-option") {
      console.log("id2")
    }
    else if (id === "pro-option") {
      console.log("id3")
    }
  } */

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true)
  }

  useEffect(() => {
    props.onStateChange(clicked)
  }, [handleClick])

  return (
    <div className="options">
      <button
        onClick={handleClick}
        value={`Arcade $${9}/mo`}
        id="arcade-option"
      >
        <div className="img-container">
          <img src={arcadeIcon}></img>
        </div>
        <div className="option-price">
          <strong>Arcade</strong>
          <p id="price">{`$9/mo`}</p>
        </div>
      </button>
      <button id="advanced-option" onClick={handleClick}>
        <div className="img-container">
          <img src={advancedIcon}></img>
        </div>
        <div className="option-price">
          <strong>Advanced</strong>
          <p id="price">{`$12/mo`}</p>
        </div>
      </button>
      <button id="pro-option" onClick={handleClick}>
        <div className="img-container">
          <img src={proIcon}></img>
        </div>
        <div className="option-price">
          <strong>Pro</strong>
          <p id="price">$15/mo</p>
        </div>
      </button>
    </div>
  );
}

function YearlyPlan(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true)
  }

  useEffect(() => {
    props.onStateChange(clicked)
  }, [handleClick])

  return (
    <div className="options">
      <button id="arcade-option" onClick={handleClick}>
        <div className="img-container">
          <img src={arcadeIcon}></img>
        </div>
        <div className="option-price">
          <strong>Arcade</strong>
          <p id="price">$90/yr</p>
        </div>
      </button>
      <button id="advanced-option">
        <div className="img-container">
          <img src={advancedIcon}></img>
        </div>
        <div className="option-price">
          <strong>Advanced</strong>
          <p id="price">{`$120/yr`}</p>
        </div>
      </button>
      <button id="pro-option">
        <div className="img-container">
          <img src={proIcon}></img>
        </div>
        <div className="option-price">
          <strong>Pro</strong>
          <p id="price">{`$150/yr`}</p>
        </div>
      </button>
    </div>
  );
}

export default SelectPlanComponent;
