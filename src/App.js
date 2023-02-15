import React, { useState } from "react";

import "./styles/App.css";

import Sidebar from "./Sidebar";

import YourInfoComponent from "./Components/YourInfoComponent";
import SelectPlanComponent from "./Components/SelectPlanComponent";
import AddOnsComponent from "./Components/AddOnsComponent";
import SummaryComponent from "./Components/SummaryComponent";

const App = () => {
  const [content, setContent] = useState("your-info");

  const handleYourInfoClick = () => {
    setContent("your-info");
  };

  const handleSelectPLanClick = () => {
    setContent("select-plan");
  };

  const handleAddOnsClick = () => {
    setContent("add-ons");
  };

  const handleSummaryClick = () => {
    setContent("summary");
  };

  return (
    <main>
      <Sidebar
        handleYourInfoClick={handleYourInfoClick}
        handleSelectPLanClick={handleSelectPLanClick}
        handleAddOnsClick={handleAddOnsClick}
        handleSummaryClick={handleSummaryClick}
      />
      {content === "your-info" && (
        <YourInfo
          handleSelectPLanClick={handleSelectPLanClick}
        />
      )}
      {content === "select-plan" && (
        <SelectPlan 
          handleYourInfoClick={handleYourInfoClick}
          handleAddOnsClick={handleAddOnsClick}
        />
      )}
      {content === "add-ons" && <AddOns />}
      {content === "summary" && <Summary />}
    </main>
  );
};

function YourInfo(props) {
  return (
    <YourInfoComponent handleSelectPLanClick={props.handleSelectPLanClick} />
  );
}

function SelectPlan(props) {
  return (
    <SelectPlanComponent
      handleYourInfoClick={props.handleYourInfoClick}
      handleAddOnsClick={props.handleAddOnsClick}
    />
  );
}

function AddOns() {
  return <AddOnsComponent />;
}

function Summary() {
  return <SummaryComponent />;
}

export default App;
