import React, { useState } from 'react';
import logo from '../../logo_catapulta.svg';
import { Anchor, Drawer, Button } from 'antd';
import { AiOutlineMenu } from "react-icons/ai";

const { Link } = Anchor;

function AppHeader() {
    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
    setVisible(true);
  };
  
    const onClose = () => {
    setVisible(false);
  };

    return (
        <div className="container-fluid">
            <div className="header">
            {/* Ajuste para el logo 
             <div className="logo"/>*/} 
            <a href="http://www.catapultadesign.com">           
            <img src={logo} className="logo" alt="logo"/></a>
            <div className="mobileHidden">
            <Anchor targetOffset="65">
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#features" title="Features" />
                    <Link href="#works" title="How it Works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />        
                </Anchor>
               </div>   
            <div className="mobileVisible"> 
                <Button type="primary" onClick={showDrawer}>
                <AiOutlineMenu className="fas"/>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    >
                    <Anchor targetOffset="65">
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#features" title="Features" />
                    <Link href="#works" title="How it Works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />        
                </Anchor>
                </Drawer>
             </div>
           </div>
        </div>
    );
}

export default AppHeader;