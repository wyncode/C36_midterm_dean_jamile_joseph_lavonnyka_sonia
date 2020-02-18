import React from "react"



function Header() {
  return(

  <div>
    <div id="header-container">
        <span className="menu"><a className="mainNav" href="home">WynEats</a></span>  
        <span className="menu-buttons"><a href="myeats">MyEats</a></span>
        <span className="menu-buttons"><a href="about">About</a></span>
        <span className="menu-buttons"><a href="contacts">Contacts</a></span>
    </div>
    <button className="eat" type="active">Let's Eat</button>
   </div>
      
  )
} 
export default Header;



