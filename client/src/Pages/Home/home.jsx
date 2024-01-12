import React from 'react'
import { Helmet } from 'react-helmet-async'
import Ourp from '../../Components/OurProduct/ourp'
import Welcome from '../../Components/Welcome/welcome'
import Aboutussect from '../../Components/AboutUsSEction/aboutussect'

function Home() {
  return (
    <>
    <Helmet>
       <title> Home Page</title>
    </Helmet>
     <div>
      <Aboutussect/>
        <Ourp/>
     </div>

    </>
   
  )
}

export default Home