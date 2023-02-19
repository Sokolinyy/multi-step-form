import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

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
  const [selectPlan, setSelectPlan] = useState("Monthly");

  const handleRightClick = () => {
    setActive(true);
    // Call function for right click (Yearly Plan)
    handleYearlyPlan();
    setSelectPlan("Yearly");
  };

  const handleLeftClick = () => {
    setActive(false);
    // Call function for left click (Monthly PLan)
    handleMonthlyPlan();

    setSelectPlan("Monthly");
  };

  // Checking if button "Next Step" was pressed

  // State for going to add-ons page
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (arcadeClick || advancedClick || proClick) {
      setShow(true);
    }
  };

  const [arcadeClick, setArcadeClick] = useState(false);
  const [advancedClick, setAdvancedClick] = useState(false);
  const [proClick, setProClick] = useState(false);

  const [optionValue, setOptionValue] = useState("");

  function handleClick2(value) {
    console.log(value);
  }

  function handleButtonClick(event) {
    handleArcadeClick()
    handleClick2(event.target.value);
  }

  const handleArcadeClick = () => {
    setArcadeClick(!arcadeClick);
    setOptionValue("Arcade");
  };
  const handleAdvancedClick = () => {
    setAdvancedClick(!advancedClick);
    setOptionValue("Advanced");
  };
  const handleProClick = () => {
    setProClick(!proClick);
    setOptionValue("Pro");
  };

  return (
    <section className="select-your-plan">
      {show && (
        <AddOnsComponent selectPlan={selectPlan} optionValue={optionValue} />
      )}
      {/* Next Step button set "show" to true, and if so, hide all article 
      and display Add-ons component */}
      <article style={{ display: show ? "none" : "flex" }}>
        <div className="description">
          <h2>Select your plan</h2>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div>
          {/* If chosen plan is "monthly" render MonthlyPlan function
           that change price to monthly tariff */}
          {plan === "monthly" && (
            <article>
              <div className="options">
                <button
                  id="arcade-option"
                  onClick={handleButtonClick}
                  value="$9/mo"
                >
                  <div className="img-container">
                    <img src={arcadeIcon}></img>
                  </div>
                  <div className="option-price">
                    <strong>Arcade</strong>
                    <p id="price">$9/mo</p>
                  </div>
                </button>
                <button
                  id="advanced-option"
                  onClick={handleAdvancedClick}
                  value="$12/mo"
                >
                  <div className="img-container">
                    <img src={advancedIcon}></img>
                  </div>
                  <div className="option-price">
                    <strong>Advanced</strong>
                    <p id="price">$12/mo</p>
                  </div>
                </button>
                <button
                  id="pro-option"
                  onClick={handleProClick}
                  value="$15/mo"
                >
                  <div className="img-container">
                    <img src={proIcon}></img>
                  </div>
                  <div className="option-price">
                    <strong>Pro</strong>
                    <p id="price">$15/mo</p>
                  </div>
                </button>
              </div>
            </article>
          )}
        </div>
        {/* If chosen plan is "yearly" render MonthlyPlan function
        that change price to yearly tariff*/}
        {plan === "yearly" && (
          <article>
            <div className="options">
              <button id="arcade-option" onClick={handleArcadeClick}>
                <div className="img-container">
                  <img src={arcadeIcon}></img>
                </div>
                <div className="option-price">
                  <strong>Arcade</strong>
                  <p id="price">$90/yr</p>
                </div>
              </button>
              <button id="advanced-option" onClick={handleAdvancedClick}>
                <div className="img-container">
                  <img src={advancedIcon}></img>
                </div>
                <div className="option-price">
                  <strong>Advanced</strong>
                  <p id="price">$120/yr</p>
                </div>
              </button>
              <button id="pro-option" onClick={handleProClick}>
                <div className="img-container">
                  <img src={proIcon}></img>
                </div>
                <div className="option-price">
                  <strong>Pro</strong>
                  <p id="price">$150/yr</p>
                </div>
              </button>
            </div>
          </article>
        )}

        <div className="choose-monthly-yearly">
          <p id="choose-error"></p>
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
          <button id="next-step-btn" onClick={handleShow}>
            Next Step
          </button>
        </div>
      </article>
    </section>
  );
};

export default SelectPlanComponent;
