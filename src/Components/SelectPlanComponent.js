import React, { useState } from "react";

import "../styles/SelectPlanComponent.css";

import arcadeIcon from "../images/icon-arcade.svg";
import advancedIcon from "../images/icon-advanced.svg";
import proIcon from "../images/icon-pro.svg";
import AddOnsComponent from "./AddOnsComponent.js";

const SelectPlanComponent = (props) => {
  // active and setActive will be change plan
  // from monthly to yearly, and conversely
  const [active, setActive] = useState(false);
  // Default value will be monthly
  const [plan, setPlan] = useState("monthly");

  const handleMonthlyPlan = () => {
    setPlan("monthly");
  };
  const handleYearlyPlan = () => {
    setPlan("yearly");
  };

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

  // State for follow, which button was clicked
  const [arcadeClick, setArcadeClick] = useState(false);
  const [advancedClick, setAdvancedClick] = useState(false);
  const [proClick, setProClick] = useState(false);

  // Option value will set name of tariff
  const [optionValue, setOptionValue] = useState("");

  // Set price for which tariff was chosen,
  // if Arcade, than price will be $9/mo and etc
  const [price, setPrice] = useState(0);

  const handleArcadeClick = () => {
    setArcadeClick(!arcadeClick);
    setOptionValue("Arcade");
    setPrice("9");
    {
      plan === "yearly" && setPrice("90");
    }
  };

  const handleAdvancedClick = () => {
    setAdvancedClick(!advancedClick);
    setOptionValue("Advanced");
    setPrice("12");
    {
      plan === "yearly" && setPrice("120");
    }
  };
  const handleProClick = () => {
    setProClick(!proClick);
    setOptionValue("Pro");
    setPrice("15");
    {
      plan === "yearly" && setPrice("150");
    }
  };

  return (
    <section className="select-your-plan">
      {/* If show state === true, show AddonsComponent */}
      {show ? (
        <AddOnsComponent
          selectPlan={selectPlan}
          optionValue={optionValue}
          price={price}
        />
      ) : null}
      {/* Next Step button set "show" to true, and if so, hide all article
      and display Add-ons component */}
      <article className="select-your-plan-box" style={{ display: show ? "none" : "flex" }}>
        <div className="description">
          <h2>Select your plan</h2>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="select-plan-container">
          {/* If chosen plan is "monthly" render MonthlyPlan function
           that change price to monthly tariff */}
          {plan === "monthly" ? (
            <div>
              <div className="options">
                <button
                  id="arcade-option"
                  onClick={handleArcadeClick}
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
                <button id="pro-option" onClick={handleProClick} value="$15/mo">
                  <div className="img-container">
                    <img src={proIcon}></img>
                  </div>
                  <div className="option-price">
                    <strong>Pro</strong>
                    <p id="price">$15/mo</p>
                  </div>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        {/* If chosen plan is "yearly" render MonthlyPlan function
        that change price to yearly tariff*/}
        {plan === "yearly" ? (
          <div>
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
          </div>
        ) : null}

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
