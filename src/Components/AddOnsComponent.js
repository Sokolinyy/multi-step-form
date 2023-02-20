import React, { useState, useEffect } from "react";

import SelectPlanComponent from "./SelectPlanComponent";
import SummaryComponent from "./SummaryComponent.js";

import "../styles/AddOnsComponent.css";

const AddOnsComponent = (props) => {
  // Props from SelectPlanComponent that grab value "Yearly" or "Monthly"

  // State that changes button "Go back" from false to true
  const [goBackButton, setBackButton] = React.useState(false);
  const handleBackClick = () => {
    setBackButton(true);
  };

  /* For checkboxes that set name of selected tariff and price*/
  const [addonsName1, setAddonsName1] = useState("")
  const [addonsPrice1, setAddonsPrice1] = useState("")
  const [addonsName2, setAddonsName2] = useState("");
  const [addonsPrice2, setAddonsPrice2] = useState("");
  const [addonsName3, setAddonsName3] = useState("");
  const [addonsPrice3, setAddonsPrice3] = useState("");

  const [checkbox1, setCheckbox1] = useState(false);

  const handleCheckbox1 = () => {
    setCheckbox1(!checkbox1);

    // If checkbox1 is checked, set addons name and price, depend on monthly or yearly plan
    // ! This will work for all three checkboxes
    if (!checkbox1) {
      setAddonsName1("Online Services");
      if (props.selectPlan === "Monthly") {
        setAddonsPrice1("1");
      } else if (props.selectPlan === "Yearly") {
        setAddonsPrice1("10");
      }}
    }

  const [checkbox2, setCheckbox2] = useState(false);

  const handleCheckbox2 = () => {
    setCheckbox2(!checkbox2);

    if (!checkbox2) {
      setAddonsName2("Larger storage");
      if (props.selectPlan === "Monthly") {
        setAddonsPrice2("2");
      } else if (props.selectPlan === "Yearly") {
        setAddonsPrice2("20");
      }}
  };

  const [checkbox3, setCheckbox3] = useState(false);

  const handleCheckbox3 = () => {
    setCheckbox3(!checkbox3);

    if (!checkbox3) {
      setAddonsName3("Customizable profile");
      if (props.selectPlan === "Monthly") {
        setAddonsPrice3("2");
      } else if (props.selectPlan === "Yearly") {
        setAddonsPrice3("20");
      }}
  };

  // Change text on "Next Step" button, if some of checkboxes was clicked
  // set "Skip", otherwise set "Next Step"
  useEffect(() => {
    if (checkbox1 || checkbox2 || checkbox3) {
      document.getElementById("next-step-btn").textContent = "Next Step"
    }
    else {
      document.getElementById("next-step-btn").textContent = "Skip"
    }
  }, [checkbox1, checkbox2, checkbox3])

  // Styles for checkboxes
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

  // Checking if checkboxes was clicked
  const handleCheckboxChange = (event) => {
    checkbox1(event.target.checked);
    checkbox2(event.target.checked);
    checkbox3(event.target.checked);
  }

  return (
    <section className="add-ons-section">
      {/* Show SummaryComponent and hide AddOnsComponent and
       pass addons name, price, and if checkboxes was clicked to Summary component */}
      {show && (
        <SummaryComponent
          optionValue={props.optionValue}
          selectPlan={props.selectPlan}
          price={props.price}
          
          isCheckbox1={checkbox1}
          isCheckbox2={checkbox2}
          isCheckbox3={checkbox3}

          addonsName1={addonsName1}
          addonsPrice1={addonsPrice1}

          addonsName2={addonsName2}
          addonsPrice2={addonsPrice2}

          addonsName3={addonsName3}
          addonsPrice3={addonsPrice3}
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
        {props.selectPlan === "Monthly" && (
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
                  onChange={handleCheckboxChange}
                  name="Online Services"
                  value="+$1/mo"
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
                  onChange={handleCheckboxChange}
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
                  onChange={handleCheckboxChange}
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

        {props.selectPlan === "Yearly" && (
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                  Go Back
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
