import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => {
  return (
    <Helmet>
      <title>Hands Up! - TSS</title>
      <link
        rel='favicon'
        href='/src/images/my-life-favicon.png'
        type='image/png'
      />
    </Helmet>
  )
}

export default SEO
