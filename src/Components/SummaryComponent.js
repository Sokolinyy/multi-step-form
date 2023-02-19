import React from 'react'

const SummaryComponent = (props) => {
  const optionValue = props.optionValue
  const selectPlan = props.selectPlan

  return (
    <div>{optionValue} {selectPlan}</div>
  )
}

export default SummaryComponent