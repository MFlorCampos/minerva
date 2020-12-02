import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OneLinerItem({ img, icon, title, text}) {
  return (
    <div className="col-lg-3 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
      <div className="strategy-card">
      {img && 
        <img src={img} alt="placeholder" /> }
        <div className="fontawesome-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default OneLinerItem
