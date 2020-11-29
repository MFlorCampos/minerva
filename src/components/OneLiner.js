import React from 'react'
import OneLinerItem from './OneLinerItem'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faUsers, faLock, faChartLine } from '@fortawesome/free-solid-svg-icons'

function OneLiner() {
  return (
    <div className="strategy-section">
      <div className="container strategy-container" data-aos="fade-up">
        <OneLinerItem
          icon = {faHandshake}
          title={`Confianza`}
          text={'Más de 30 años asesorando a empresas.'}
        />
        <OneLinerItem
          icon={faUsers}
          title={`Profesionalismo`}
          text={'Equipo ágil y diverso orientado a soluciones integrales.'}
        />
        <OneLinerItem
          icon={faLock}
          title={`Compromiso`}
          text={'Crecemos junto a nuestros clientes.'}
        />
        <OneLinerItem
          icon={faChartLine}
          title={`Transparencia`}
          text={'Compartimos nuestro conocimiento para tomar las mejores decisiones.'}
        />
      </div>
    </div>
  )
}

export default OneLiner
