import React, { useState } from 'react'
import { useInterval } from '@hooks/useInterval'
import { Hands, Beems, Man } from './parts'

const Drawing = () => {
  const [active, setActive] = useState(false)

  const trigger = (b: boolean) => setActive(b)

  useInterval(trigger)

  return (
    <div className='h-screen w-screen'>
      <svg
        width='1296px'
        height='1728px'
        viewBox='0 0 1296 1728'
        className='h-full w-full'
      >
        <style type='text/css'></style>
        <g id='Layer_7'>
          {active && (
            <>
              <Hands />
              <Beems />
            </>
          )}
          <Man />
        </g>
      </svg>
    </div>
  )
}

export default Drawing
