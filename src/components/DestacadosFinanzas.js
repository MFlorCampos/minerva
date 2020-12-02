import React from 'react'
import OneLinerItem from './OneLinerItem'

function OneLiner() {
  return (
    <div className="strategy-section">
      <div className="container strategy-container" data-aos="fade-up">
        <OneLinerItem
          img = {"https://via.placeholder.com/150"}
          title={`Lorem ipsum dolor`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <OneLinerItem
          img = {"https://via.placeholder.com/150"}
          title={`Lorem ipsum dolor`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <OneLinerItem
          img = {"https://via.placeholder.com/150"}
          title={`Lorem ipsum dolor`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <OneLinerItem
          img = {"https://via.placeholder.com/150"}
          title={`Lorem ipsum dolor`}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
      </div>
    </div>
  )
}

export default OneLiner
