import React, { useState } from 'react'

import "./styles/Sidebar.css"

import bgImage from "./images/bg-sidebar-desktop.svg";

const Sidebar = (props) => {
  return (
    <article className="side-bar-container">
        <div className="side-bar-image-container">
          <img className="side-bar-image" src={bgImage}></img>
        </div>
          <div className="side-bar-info-container">
            <div className="side-bar-info" onClick={props.handleYourInfoClick}>
              <div className="image-of-steps">
                <p>1</p>
              </div>
              <div className="sidebar-description">
                <h5 className="number-of-steps">STEP 1</h5>
                <h4 >YOUR INFO</h4>
              </div>
            </div>
            <div className="side-bar-info-2" onClick={props.handleSelectPLanClick}>
              <div className="image-of-steps">
                <p>2</p>
              </div>
              <div className="sidebar-description">
                <h5 className="number-of-steps">STEP 2</h5>
                <h4>SELECT PLAN</h4>
              </div>
            </div>
            <div className="side-bar-info" onClick={props.handleAddOnsClick}>
              <div className="image-of-steps">
                <p>3</p>
              </div>
              <div className="sidebar-description">
                <h5 className="number-of-steps">STEP 3</h5>
                <h4>ADD-ONS</h4>
              </div>
            </div>
            <div className="side-bar-info" onClick={props.handleSummaryClick}>
              <div className="image-of-steps">
                <p>4</p>
              </div>
              <div className="sidebar-description">
                <h5 className="number-of-steps">STEP 4</h5>
                <h4>SUMMARY</h4>
              </div>
            </div>
          </div>
      </article>
  )
}

export default Sidebar