import React from 'react';
import logo from '../../logo_catapulta.svg';
import { FaFacebookF, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BackTop, } from 'antd';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="">
                <a href="http://www.catapultadesign.com">           
                  <img src={logo} className="logo" alt="logo"/></a>
               </div>
               <ul className="socials fas">
                   <li><a href="http://www.facebook.com"><FaFacebookF className="fa-facebook-f"/></a></li>
                   <li><a href="http://www.facebook.com"><FaInstagram className="fa-twitter"/></a></li>
                   <li><a href="http://www.facebook.com"><FaYoutube className="fa-linkedin-in"/></a></li>
                   <li><a href="http://www.facebook.com"><FaGithub className="fa-pinterest-p"/></a></li>
                   <li><a href="http://www.facebook.com"><FaGithub className="fa-fa-instagram-p"/></a></li>
               </ul>
               <div className="copyright">Copyright &copy; 2021 Catapulta</div>
               <BackTop>
               <div className="goTop"><FaArrowAltCircleUp className=" footer fas"/></div>
            </BackTop>
           </div>
        </div>  
    );
}

export default AppFooter;