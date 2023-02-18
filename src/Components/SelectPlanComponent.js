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

  /* buttonValue pass value to the Add-ons Component*/
  const [buttonValue, setButtonValue] = useState('Monthly')

  const handleRightClick = () => {
    setActive(true);
    // Call function for right click (Yearly Plan)
    handleYearlyPlan();
    setButtonValue("Yearly")
  };

  const handleLeftClick = () => {
    setActive(false);
    // Call function for left click (Monthly PLan)
    handleMonthlyPlan();

    setButtonValue('Monthly')
  };

  // Checking if button "Next Step" was pressed
  const [nextBtn, seNextBtn] = useState(false);
  const handleNext = () => {
    seNextBtn(true);
  };

  // State for going to add-ons page
  const [show, setShow] = useState(false)

  // Button 'Next Step' will set state 'show' to true
  const handleShow = () => {
      setShow(true)
  }

  const handleNextPage = (chooseOption) => {
    if (chooseOption && handleShow) {
      return <AddOnsComponent />
    }
  }

  return (
    <section className="select-your-plan">
      {show && <AddOnsComponent />}
      {/* Next Step button set "show" to true, and if so, hide all article 
      and display Add-ons component */}
      <article style={{display: show ? "none" : "flex"}}>
        <div className="description">
          <h2>Select your plan</h2>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div>
          {/* If choosen plan is "monthly" render MonthlyPlan function
           that change price to monthly tariff */}
          {plan === "monthly" && (
            <MonthlyPlan 
              nextBtn={nextBtn}
              onStateChange={handleNextPage}
            />
          )}
        </div>
        {/* If choosen plan is "yearly" render MonthlyPlan function
        that change price to yearly tariff*/}
        {plan === "yearly" && (<YearlyPlan 
          nextBtn={nextBtn}
          onStateChange={handleNextPage}
          />
        )}
        <div className="choose-monthly-yearly">
          <p>Monthly</p>
          {/* button that checks what kind of tariff it is at the moment*/}
          <button
            className="dot-button"
            onClick={active ? handleLeftClick : handleRightClick}
          >
            <div className={`dot ${active ? "active" : ""}`} />
          </button>
          <p>Yearly</p>
        </div>
        <div className="next-back-button">
          {/* handleYourInfoClick coming from YourInfo component */}
          <button className="go-back-btn" onClick={props.handleYourInfoClick}>
            Go Back
          </button>
          <button id="next-step-btn" onClick={handleNextPage}>
            Next Step
          </button>
        </div>
      </article>
    </section>
  );
};


/* Monthly plan for display monthly price to user */
function MonthlyPlan(props) {
  /* Check if whatever of option was clicked - "Arcade" "Advanced" or "Pro" */
  const [clicked, setClicked] = useState(false);

  console.log(clicked)

  function handleClick() {
    setClicked(true)
  }

  /* useEffect for passing  false or true as props to the main component SelectPlanComponent, 
  for checking if whatever of option was clicked - "Arcade" "Advanced" or "Pro"*/
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

/* Monthly plan for display yearly price to user */
function YearlyPlan(props) {
  const [chooseOption, setChooseOption] = useState(false);

  function handleClick() {
    setChooseOption(true)
  }

  useEffect(() => {
    props.onStateChange(chooseOption)
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
