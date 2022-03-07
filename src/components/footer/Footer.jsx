import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footerContent">
        <div className="footerRight">
          <img src="https://res.cloudinary.com/huan-cloudinary/image/upload/v1646378675/bad_ecommerce/logos/logo_trans_white_zyhz63.png" alt="" className="footerLogo"/>
        </div>
        <div className="footerLeft">
          <div className="footerCol">
            <h4 className="colTitle">关于我们</h4>
            <p className="colContent">公司介绍</p>
            <p className="colContent">公司历史</p>
            <p className="colContent">业务范畴</p>
            <p className="colContent">领导团队</p>
            <p className="colContent">常见问题</p>
          </div>
          <div className="footerCol">
            <h4 className="colTitle">帮助与支持</h4>
            <p className="colContent">支付方式</p>
            <p className="colContent">订单帮助</p>
            <p className="colContent">发货和物流</p>
            <p className="colContent">退换货条款</p>
            <p className="colContent">维修中心</p>
            <p className="colContent">售后服务政策</p>

          </div>
          <div className="footerCol">
            <h4 className="colTitle">联系我们</h4>
            <p className="colContent">投资者联系</p>
            <p className="colContent">媒体联系</p>
            <p className="colContent">客户联系</p>
            <p className="colContent">合作洽谈</p>
          </div>
        </div>
      </div>
      <hr className="footerLine"/>
      <div className="copyright">
        <p>苏ICP备12****89号-17   苏公网安备1000****1774号</p>
        <p>Copyright © 1999 - 2022 Dashin Electronic. All Rights Reserved. 大鑫电子公司 版权所有. </p>
      </div>
    </div>
  )
}

export default Footer