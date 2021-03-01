import React, { useEffect, useState } from 'react'
import Hero from './Hero.js'


const HeroContainer = (props) => {
    const { copy } = props;
    const [copyState, setCopy] = useState(copy)
    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {

          let nextActive = active === 0 ? active + 1 : active - 1;

          copy[active].class = ""
          setActive(nextActive);
          copy[nextActive].class = "active"
          setCopy([...copy])

        }, 800000)
        return () => clearInterval(interval)
      })
      return copyState ? <Hero copy={[...copyState]} /> : null
}

  export default HeroContainer