import React, { useContext } from 'react'

import { ButtonContext } from '../ButtonContext'

import "../styles/AddOnsComponent.css"

const AddOnsComponent = (props) => {
  const buttonValue = props.buttonValue

  return (
    <section className='add-ons-section'>
      <article>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        {buttonValue === "Monthly" && <div>Tis is MONTH!!!!!</div>}
        {buttonValue === "Yearly" && <div>TIS IS YEARRRRRRRRRRRRRR</div>}
        <div>
          <button></button>
          <button></button>
        </div>
      </article>
    </section>
  )
}

export default AddOnsComponent