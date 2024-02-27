import React, {useState} from 'react'
import axios from "axios"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"

import { setToken } from '../../../redux/User/UserSlice'

const API = "https://api.escuelajs.co/api/v1/auth"

function Login({ changes }) {
   const [user, setUser] = useState({
      email: "",
      password: "",
   })

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const token = useSelector((state) => state.user.token)

  

   const handleChange = (event) => {
      const {name, value} = event.target;
      setUser({...user,[name]: value})
   }

   async function handleLogin() {
      try{
         const {data} = await axios.post(`${API}/login`, user)
         
         dispatch(setToken(data.access_token))

         if(data.access_token) {
            navigate("/account")
         }
       
      }catch(error) {
         console.log(error);
      }
   }
   return (
      <div>
         <h1>Log in to Exclusive</h1>
         <p>Enter your details below</p>

         <div className="inputs">
            <input 
               type="email" 
               placeholder='Email or Phone Number' 
               name='email' 
               value={user.email} 
               onChange={handleChange}
            />
            <input 
               type="password" 
               placeholder='Password' 
               name='password' 
               value={user.password}
               onChange={handleChange} 
            />
         </div>
         <div className="btns">
            <button id='create' onClick={() => handleLogin()}>Log in</button>
         </div>
         <div className='question'>
            <button onClick={changes}>Forget Password?</button>
         </div>
      </div>
   )
}

export default Login