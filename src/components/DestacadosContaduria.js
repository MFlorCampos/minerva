import React from 'react'
import OneLinerItem from './OneLinerItem'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faChartBar, faArrowsAlt, faBinoculars  } from '@fortawesome/free-solid-svg-icons'

function OneLiner() {
  return (
    <div className="strategy-section">
      <div className="container strategy-container" data-aos="fade-up">
        <OneLinerItem
          icon = {faChartBar}
          title={`Diseño de Plan de negocios`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <OneLinerItem
          icon = {faArrowsAlt}
          title={`Definición de estrategias`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <OneLinerItem
          icon = {faBinoculars}
          title={`Generación de nuevos negocios`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <OneLinerItem
          icon = {faEye}
          title={`Gestion y control`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
      </div>
    </div>
  )
}

export default OneLiner
