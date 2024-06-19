import React, { useState } from "react";
import Sidebar from './Sidebar/Sidebar';

function Navbar() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };


  return (
    <>
     <Sidebar isopen={isopen} toggle={toggle} />

      <div className="NavHead">
        <div className="Navbar">
        <div className="logo">
        <a href="/">  <img src="/images/logo.svg" id="rtdyfg" /></a>
          </div>
          <div className="MiddleNav">
            <ul>
             <a href="/"> <li>
             <div class="dropdown">
  <div class="dropbtn">Industries <img className="yfgh" src="/images/down.svg" /></div>
  <div class="dropdown-content">
<div className="yhjugkb">
<div>
 <a href="#">Agriculture</a>
    <a href="#">Manufacturing</a>
    <a href="#">Textile</a>
    <a href="#">Gems and Jewelry</a>
    <a href="#">FMCG</a>
    <a href="#">Fashion</a>
    <a href="#">Retail</a>
    <a href="#">Ecommerce</a>
    <a href="#">F&B</a>
 </div>
 <div>
 <a href="#">HORECA</a>
    <a href="#">Hospitality</a>
    <a href="#">Tourism</a>
    <a href="#">Real Estate</a>
    <a href="#">Law Firms</a>
    <a href="#">Auditing Firms</a>
    <a href="#">Education and Training</a>
    <a href="#">Healthcare</a>
    {/* <a href="#">F&B</a> */}
 </div>
</div>
  </div>
</div>
              </li></a>
             <a href="/capabilities"><li>
              
<div class="dropdown">
  <div class="dropbtn">Capabilities <img src="/images/down.svg" /></div>
  <div class="dropdown-content1">
    <a href="#">Strategy</a>
    <a href="#">Product Design</a>
    <a href="#">Transformation</a>
    <a href="#">Digital, Technology & Data</a>
    <a href="#">People and Organisation</a>
    <a href="#">Operations</a>
    <a href="#">Growth, Marketing & Sales</a>
  </div>
</div>
              </li></a>
             <a href="/aboutus"><li>About us</li></a>
             <a href="/"><li id="contact">Contact</li></a>
            </ul>
          </div>
          <div className="Menu" onClick={toggle}>
          <img src="/images/menu.svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;