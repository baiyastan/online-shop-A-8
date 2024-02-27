import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {useSelector} from "react-redux"

import account from "../../assets/svg/account.svg"
import cart from "../../assets/svg/cart.svg"
import search from "../../assets/svg/search.svg"
import wishlist from "../../assets/svg/wishlist.svg"
import "./Header.css"

function Header() {
  const {t, i18n} = useTranslation()
  const {token, user} = useSelector((state) => state.user)

  const handleChangeLang = (event) => {
    const selectLng = event.target.value

    i18n.changeLanguage(selectLng)
  }
  return (
    <>
      <header className='header'>
        <div className='top-header'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <select onChange={handleChangeLang}>
            <option value="en">Eng</option>
            <option value="ru">Rus</option>
            <option value="ky">Kgz</option>
          </select>
        </div>
        <div className='main-header container'>
          <div className='menu'>          
            <div className='logo'>
              <Link to="/">{t('exclusive')}</Link>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/about">{t('about')}</Link>
              </li>
              <li>
                <Link to="/register">Sign UP</Link>
              </li>
            </ul>
          </div>

          <div className='user-card'>
            <div className='search'>
              <input type="text" />
              <img src={search} alt="icon" />
            </div>
            <div className='user-icons'>
              <Link to="/wishlist">
              <img src={wishlist} alt="icon" />
              </Link>
              <Link to="/cart">
                <img src={cart} alt="icon" />
              </Link>
              {
                token && (
                  <Link to="/account">
                  <img className='account-avatar' src={user?.avatar ? user?.avatar : account} alt="" />
                </Link>
                )
              }
            
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header