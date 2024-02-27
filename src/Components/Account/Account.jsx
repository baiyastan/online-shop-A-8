import React, { useEffect } from 'react'
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"

import { setUser } from '../../redux/User/UserSlice'
import "./Account.css"

const API = "https://api.escuelajs.co/api/v1/auth/profile"

function Account() {
    const {token} = useSelector((state) => state.user)

    const dispatch = useDispatch()

    async function getUser(){
        try{
            const res = await axios.get(API , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch(setUser(res.data))
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser()
    },[])
  return (
    <div>Account</div>
  )
}

export default Account