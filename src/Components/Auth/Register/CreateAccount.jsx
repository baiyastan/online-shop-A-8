import React, {useState} from 'react'
import axios from "axios"

const API = "https://api.escuelajs.co/api/v1/users/"

function Registration({ changes }) {
   const [user, setUser] = useState({
      name:"",
      email:"",
      password: "",
      avatar: "https://i.imgur.com/5mPmJYO.jpeg",
   })

   const handleChange = (event) => {
      const {name, value} = event.target;
      setUser({...user,[name]: value})
   }

   async function handleSubmit() {
      try{

         const res = await axios.post(API, user)

         console.log(res)
      }catch(error) {
         console.log(error);
      }
   }

   return (
      <div>
         <h1>Create an account</h1>
         <p>Enter your details below</p>

         <div className="inputs">
            <input 
               type="text" 
               placeholder='Name' 
               value={user.name} 
               name='name' 
               onChange={handleChange}
            />
            <input 
               type="email" 
               placeholder='Email or Phone Number' 
               value={user.email} 
               name='email' 
               onChange={handleChange}
            />
            <input 
               type="password" 
               placeholder='Password' 
               value={user.password} 
               name='password' 
               onChange={handleChange}
            />
         </div>
         <div className="btns">
            <button id='create' onClick={() => handleSubmit()}>Create Account</button>
            <button id='google'>Sign up with Google</button>
         </div>
         <div className='question'>
            Already have account?
            <button onClick={changes}>Sign Up</button>
         </div>
      </div>
   )
}

export default Registration