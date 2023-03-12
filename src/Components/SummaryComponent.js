import React from "react";
import "../styles/SummaryComponent.css";
import AddOnsComponent from "./AddOnsComponent";
import SelectPlanComponent from "./SelectPlanComponent"

const SummaryComponent = (props) => {
  // Getting props from AddonsComponent

  // What tariff was chosen - Arcade, Pro or Advanced
  const optionValue = props.optionValue;
  // What plan was chosen - Monthly or Yearly
  const selectPlan = props.selectPlan;
  // Price of tariff, which converted in number with parseInt
  const price = parseInt(props.price);

  // Addons price, 
  const addonsPrice1 = parseInt(props.addonsPrice1);
  const addonsPrice2 = parseInt(props.addonsPrice2);
  const addonsPrice3 = parseInt(props.addonsPrice3);

  // Total price equal to price of selected tariff
  // plus selected addons price
  let totalPrice = parseInt(props.price);

  if (props.isCheckbox1) {
    totalPrice += parseInt(props.addonsPrice1);
  }

  if (props.isCheckbox2) {
    totalPrice += parseInt(props.addonsPrice2);
  }

  if (props.isCheckbox3) {
    totalPrice += parseInt(props.addonsPrice3);
  }

  return (
    <article className="summary">
      {/* If button Change was clicked, hide component Summary,
       and display SelectPlanComponent */}
      <div className="container" >
        <div className="description">
          <h2>Finishing up</h2>
          <p>Double-check everything is looks OK before confirming</p>
        </div>
        <div className="all-info-container">
          <div className="selected-tariff">
            <div className="change-tariff-box">
              <p className="chosen-plan-tariff">{`${optionValue} (${selectPlan})`}</p>
            </div>
            <div>

              {/* ! From this moment, all info from other component
                will be render depend on monthly plan, or yearly */}

              {/* Display Arcade, Advanced or Pro price */}
              {selectPlan === "Monthly" && (
                <p className="tariff-price">{`$${price}/mo`}</p>
              )}
              {selectPlan === "Yearly" && (
                <p className="tariff-price">{`$${price}/yr`}</p>
              )}
            </div>
          </div>
          {/* If checkbox === true, display price of addon */}
          {props.isCheckbox1 && (
            <div className="selected-addons">
              <p>{props.addonsName1}</p>
              {selectPlan === "Monthly" && <p>{`+$${addonsPrice1}/mo`}</p>}
              {selectPlan === "Yearly" && <p>{`+$${addonsPrice1}/yr`}</p>}
            </div>
          )}
          {props.isCheckbox2 && (
            <div className="selected-addons">
              <p>{props.addonsName2}</p>
              {selectPlan === "Monthly" && <p>{`+$${addonsPrice2}/mo`}</p>}
              {selectPlan === "Yearly" && <p>{`+$${addonsPrice2}/yr`}</p>}
            </div>
          )}
          {props.isCheckbox3 && (
            <div className="selected-addons">
              <p>{props.addonsName3}</p>
              {selectPlan === "Monthly" && <p>{`+$${addonsPrice3}/mo`}</p>}
              {selectPlan === "Yearly" && <p>{`+$${addonsPrice3}/yr`}</p>}
            </div>
          )}
        </div>
        {/* Display total price */}
        <div className="total">
          {selectPlan === "Monthly" && (
            <div className="total-per-month-line">
              <p>{`Total (per month)`}</p>
              <p className="total-price">{`+$${totalPrice}/mo`}</p>
            </div>
          )}
          {selectPlan === "Yearly" && (
            <div className="total-per-year-line">
              <p>{`Total (per year)`}</p>
              <p className="total-price">{`+$${totalPrice}/yr`}</p>
            </div>
          )}
        </div>
        <button id="confirm-btn">Confirm</button>
      </div>
    </article>
  );
};

export default SummaryComponent;
