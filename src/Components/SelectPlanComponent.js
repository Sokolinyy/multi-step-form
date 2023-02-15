import React, { useState, useRef } from "react";

import "../styles/SelectPlanComponent.css";

import arcadeIcon from "../images/icon-arcade.svg";
import advancedIcon from "../images/icon-advanced.svg";
import proIcon from "../images/icon-pro.svg";

const SelectPlanComponent = (props) => {
  const [active, setActive] = useState(false);

  const [plan, setPlan] = useState("monthly");

  const handleMonthlyPlan = () => {
    setPlan("monthly");
  };

  const handleYearlyPlan = () => {
    setPlan("yearly");
  };

  const handleRightClick = () => {
    setActive(true);
    // Call function for right click
    handleYearlyPlan()
  };

  const handleLeftClick = () => {
    setActive(false);
    // Call function for left click
    handleMonthlyPlan()
  };

  const inputRef = useRef(null)

  function handleClick() {
    const inputElement = inputRef.current;
    const inputValue = inputElement.value;
    console.log(inputValue);
  }

  return (
    <section className="select-your-plan">
      <article>
        <div>
          <h2>Select your plan</h2>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        {plan === "monthly" && <MonthlyPlan />}
        {plan === "yearly" && <YearlyPlan />}
        <div className="choose-price">
          <p>Monthly</p>
          <button
          className="dot-button"
          onClick={active ? handleLeftClick : handleRightClick}
          value={active ? console.log("Yearly") :console.log( "Monthly")}
          ref={inputRef}
        >
          <div className={`dot ${active ? "active" : ""}`} />
        </button>
          <p>Yearly</p>
        </div>
        <div className="next-back-button">
          <button className="go-back-btn" onClick={props.handleYourInfoClick}>Go Back</button>
          <button className="next-step-btn" onClick={props.handleAddOnsClick}>Next Step</button>
        </div>
      </article>
    </section>
  );
};

function MonthlyPlan() {
  return (
    <div className="options">
      <button value={`Arcade $${9}/mo`} id="arcade-option">
        <div className="img-container">
          <img src={arcadeIcon}></img>
        </div>
        <div className="option-price">
          <p>Arcade</p>
          <p id="price">{`$9/mo`}</p>
        </div>
      </button>
      <button id="advanced-option">
        <div className="img-container">
          <img src={advancedIcon}></img>
        </div>
        <div className="option-price">
          <p>Advanced</p>
          <p id="price">{`$12/mo`}</p>
        </div>
      </button>
      <button id="pro-option">
        <div className="img-container">
          <img src={proIcon}></img>
        </div>
        <div className="option-price">
          <p>Pro</p>
          <p id="price">{`$15/mo`}</p>
        </div>
      </button>
    </div>
  );
}

function YearlyPlan() {
  return (
    <div className="options">
      <button id="arcade-option">
        <div className="img-container">
          <img src={arcadeIcon}></img>
        </div>
        <div className="option-price">
          <p>Arcade</p>
          <p id="price">$90/yr</p>
        </div>
      </button>
      <button id="advanced-option">
        <div className="img-container">
          <img src={advancedIcon}></img>
        </div>
        <div className="option-price">
          <p>Advanced</p>
          <p id="price">{`$120/yr`}</p>
        </div>
      </button>
      <button id="pro-option">
        <div className="img-container">
          <img src={proIcon}></img>
        </div>
        <div className="option-price">
          <p>Pro</p>
          <p id="price">{`$150/yr`}</p>
        </div>
      </button>
    </div>
  );
}

export default SelectPlanComponent;
