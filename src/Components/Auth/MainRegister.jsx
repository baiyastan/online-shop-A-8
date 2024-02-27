import React, { useState } from 'react'

import Registration from './Register/CreateAccount'
import Login from './Login/LoginCom'

import register from '../../assets/image/02.png'

import './Register.css'

function Account() {
   const [active, setActive] = useState(true)

   function changes() {
      setActive(!active)
   }

   return (
      <div className='reg container'>
         <div className="picture">
            <img src={register} alt="#" />
         </div>
         <div>
            {
               !active ? <Login changes={changes} /> : <Registration changes={changes} />
            }
         </div>
      </div>
   )
}

export default Account