import React, { useState, useEffect } from "react";

import SelectPlanComponent from "./SelectPlanComponent";
import SummaryComponent from "./SummaryComponent.js";

import "../styles/AddOnsComponent.css";

const AddOnsComponent = (props) => {
  // Props from SelectPlanComponent that grab value "Yearly" or "Monthly"
  const selectPlan = props.selectPlan;

  // State that changes button "Go back" from false to true
  const [goBackButton, setBackButton] = React.useState(false);
  const handleBackClick = () => {
    setBackButton(true);
  };

  /* For checkboxes */
  const [checkbox1, setCheckbox1] = useState(false);

  const handleCheckbox1 = () => {
    setCheckbox1(!checkbox1);
  };

  const [checkbox2, setCheckbox2] = useState(false);

  const handleCheckbox2 = () => {
    setCheckbox2(!checkbox2);
  };

  const [checkbox3, setCheckbox3] = useState(false);

  const handleCheckbox3 = () => {
    setCheckbox3(!checkbox3);
  };

  const boxStyle1 = {
    padding: "10px",
    backgroundColor: checkbox1 ? "rgba(217, 217, 252, 0.334)" : "transparent",
    border: checkbox1 ? "2px solid rgb(69, 59, 134)" : "2px solid lightgray",
    cursor: "pointer",
  };

  const boxStyle2 = {
    padding: "10px",
    backgroundColor: checkbox2 ? "rgba(217, 217, 252, 0.334)" : "transparent",
    border: checkbox2 ? "2px solid rgb(69, 59, 134)" : "2px solid lightgray",
    cursor: "pointer",
  };

  const boxStyle3 = {
    padding: "10px",
    backgroundColor: checkbox3 ? "rgba(217, 217, 252, 0.334)" : "transparent",
    border: checkbox3 ? "2px solid rgb(69, 59, 134)" : "2px solid lightgray",
    cursor: "pointer",
  };

  const [show, setShow] = useState(false);

  // Button 'Next Step' will set state 'show' to true
  const handleShow = () => {
    setShow(true);
  };

  const optionValue = props.optionValue;

  useEffect(() => {
    const nextBtn = document.getElementById("next-step-btn");

    if (checkbox1 || checkbox2 || checkbox3) {
      nextBtn.textContent = "Next Step";
    } else {
      nextBtn.textContent = "Skip";
    }
  }, [checkbox1, checkbox2, checkbox3]);

  return (
    <section className="add-ons-section">
      {/* Show SummaryComponent and hide AddOnsComponent */}
      {show && (
        <SummaryComponent
          optionValue={optionValue}
          selectPlan={selectPlan}
        />
      )}
      {/* If button "Go back" was clicked, return SelectPlanComponent */}
      {goBackButton && <SelectPlanComponent />}
      {/* If goBackButton was clicked, hide this component and show SelectPlanComponent */}
      <article
        style={{
          display: goBackButton ? "none" : "flex" && show ? "none" : "flex",
        }}
      >
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        {/* Display different pages (to be more precise - changing the price)
        depending on what user choose,
        at SelectPlanComponent.js - Yearly plan or Monthly plan */}
        {selectPlan === "Monthly" && (
          <div className="checkbox-container">
            <div
              className="checkbox-box"
              style={boxStyle1}
              onClick={handleCheckbox1}
            >
              <label>
                <input
                  type={"checkbox"}
                  checked={checkbox1}
                  onChange={handleCheckbox1}
                />
              </label>
              <div className="inside-checkbox">
                <div className="description">
                  <strong>Online service</strong>
                  <p>Access to multiplayer games</p>
                </div>
                <div>
                  <p className="price">+$1/mo</p>
                </div>
              </div>
            </div>

            <div
              className="checkbox-box"
              style={boxStyle2}
              onClick={handleCheckbox2}
            >
              <label>
                <input
                  type={"checkbox"}
                  checked={checkbox2}
                  onChange={handleCheckbox2}
                />
              </label>
              <div className="inside-checkbox">
                <div className="description">
                  <strong>Larger Storage</strong>
                  <p>Extra 1TB of cloud save</p>
                </div>
                <div>
                  <p className="price">+$2/mo</p>
                </div>
              </div>
            </div>

            <div
              className="checkbox-box"
              style={boxStyle3}
              onClick={handleCheckbox3}
            >
              <label>
                <input
                  type={"checkbox"}
                  checked={checkbox3}
                  onChange={handleCheckbox3}
                />
              </label>
              <div className="inside-checkbox">
                <div className="description">
                  <strong>Customizable profile</strong>
                  <p> Custom theme on your profile</p>
                </div>
                <div>
                  <p className="price">+$2/mo</p>
                </div>
              </div>
            </div>

            <div className="next-back-button">
              <button className="go-back-btn" onClick={handleBackClick}>
                Back
              </button>
              <button id="next-step-btn" onClick={handleShow}>
                Next Step
              </button>
            </div>
          </div>
        )}

        {selectPlan === "Yearly" && (
          <section className="yearly-page">
            <div className="checkbox-container">
              <div
                className="checkbox-box"
                style={boxStyle1}
                onClick={handleCheckbox1}
              >
                <label>
                  <input
                    type={"checkbox"}
                    checked={checkbox1}
                    onChange={handleCheckbox1}
                  />
                </label>
                <div className="inside-checkbox">
                  <div className="description">
                    <strong>Online service</strong>
                    <p>Access to multiplayer games</p>
                  </div>
                  <div>
                    <p className="price">+$10/yr</p>
                  </div>
                </div>
              </div>

              <div
                className="checkbox-box"
                style={boxStyle2}
                onClick={handleCheckbox2}
              >
                <label>
                  <input
                    type={"checkbox"}
                    checked={checkbox2}
                    onChange={handleCheckbox2}
                  />
                </label>
                <div className="inside-checkbox">
                  <div className="description">
                    <strong>Larger Storage</strong>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                  <div>
                    <p className="price">+$20/yr</p>
                  </div>
                </div>
              </div>

              <div
                className="checkbox-box"
                style={boxStyle3}
                onClick={handleCheckbox3}
              >
                <label>
                  <input
                    type={"checkbox"}
                    checked={checkbox3}
                    onChange={handleCheckbox3}
                  />
                </label>
                <div className="inside-checkbox">
                  <div className="description">
                    <strong>Customizable profile</strong>
                    <p> Custom theme on your profile</p>
                  </div>
                  <div>
                    <p className="price">+$20/yr</p>
                  </div>
                </div>
              </div>

              <div className="next-back-button">
                <button className="go-back-btn" onClick={handleBackClick}>
                  Back
                </button>
                <button id="next-step-btn" onClick={handleShow}>
                  Next Step
                </button>
              </div>
            </div>
          </section>
        )}
      </article>
    </section>
  );
};

export default AddOnsComponent;
