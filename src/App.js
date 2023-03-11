import React, { useState } from "react";

import "./styles/App.css";

import Sidebar from "./Sidebar";

import YourInfoComponent from "./Components/YourInfoComponent";
import SelectPlanComponent from "./Components/SelectPlanComponent";
import AddOnsComponent from "./Components/AddOnsComponent";
import SummaryComponent from "./Components/SummaryComponent";
import { UserContext } from "./UserContext";

const App = () => {

  const [content, setContent] = useState("your-info");

  // State for follow, what was clicked, and what render on page
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
        content={content}
      />
      {/* For render on page selected component, depend on what what equal content */}
      {content === "your-info" && (
        <YourInfo
          handleSelectPLanClick={handleSelectPLanClick}
        />
      )}
      {content === "select-plan" && (
        <SelectPlan handleYourInfoClick={handleYourInfoClick}
        handleAddOnsClick={handleAddOnsClick}
        />
      )}
      {content === "add-ons" && <AddOns />}
      {content === "summary" && <Summary />}
    </main>
  );
};

// Functions, which call different component
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
      content={props.content}
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
