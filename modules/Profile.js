// JavaScript File
import React from 'react'

export default React.createClass({
  render() {
    return( 
    <div>
      <div className = "container right">
        <a href="./home" className = "button1">Home</a>
      </div>
      <label><br/></label>
      <h1>Profile Page</h1>
      
      <div className="container2">
        <p id = "name">Name</p>
        <p>Username</p>
        <p>Change Password or smth</p>
      </div>
      
       <div className="site-footer">
         <label>- © 2016. -</label>
         <br/>
         <label><i>providing low-interest microloans for local, small businesses</i></label>
         <br/>
         <label><a href="./">L Project</a></label>
      </div>
    </div>
    )
  }
})
