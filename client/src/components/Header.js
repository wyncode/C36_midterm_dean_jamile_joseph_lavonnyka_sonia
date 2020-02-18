import React from "react"


function Header() {
  return(

    <>
    <div id="header-container">
      <div id="logo">
        <a className="logo-tag" href="home">WynEats</a>
      </div>
      <div id="menu"> 
        <span className="menu-buttons"><a href="myeats">MyEats</a></span>
        <span className="menu-buttons"><a href="menu-buttons">About</a></span>
        <span className="menu-buttons"><a  href="contact">Contacts</a></span>
      </div>
    </div>
    <button className="eat"type="active">Let's Eat</button>
  </>

    
  )
}
export default Header;



