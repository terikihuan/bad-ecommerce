import React from 'react'
import './topbar.css'


import { CgShoppingCart } from "react-icons/cg";
import { RiVipCrownLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container topbarContainer">
        <div className="topbarLeft">
          <img src="https://res.cloudinary.com/huan-cloudinary/image/upload/v1646636550/bad_ecommerce/logos/logo_small_b95s8r.jpg" alt="logo" className="topbarLogo" />
        </div>
        <div className="topbarRight">
          <div className="login topbarItem">
            <RiVipCrownLine className="topbarIcon"/>
            <span>会员中心</span>
          </div>
          <div className="vertLine"></div>
          <div className="cart topbarItem">
            <CgShoppingCart className="topbarIcon"/>
            <span>购物车</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar