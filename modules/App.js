import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div className = "container right">
          <a href="./Get-Started" className = "button1">Register</a>
          <button onClick={function(){document.getElementById('loginmenu').style.display="block"}} className="button1">Login</button>
        </div>

        <div id="loginmenu" className = "modal center">
          <form className="modal-content animate" action="action_page.php">

            <div className="containerlog">
              <label><b>Username</b></label>
              <input id="usn" type="text" placeholder="Enter Username" name="uname" required/>

              <label><br/></label>

              <label><b>Password</b></label>
              <input id="psd" type="password" placeholder="Enter Password" name="psw" required/>
              <label> <br/> </label>
              <button type="button" onClick = {function(){tryLogin(document.getElementById("usn").value, document.getElementById("psd").value)}} className = "button2">Login</button>
              <button type="button" onClick={function(){document.getElementById('loginmenu').style.display="none"}} className="cancelbtn">Cancel</button>
              <a href="./Get-Started" className="button2">Make an Account</a>
              </div>
          </form>
            
        </div>
        
          <div className = "logo" >
            <img src = "./Lproj-logo.png"/>
          </div>
        {this.props.children}
        <div className = "center">
          <button className ="button3">Start a Project</button>
          <button className="button3">Fund a Project</button>
        </div>

        <h1>Our Mission</h1>
        <div>
        <p id = "abt">Project L: providing low-interest microloans for local, small businesses.</p>
        </div>

        <div className="container3"><center>
        <a href="/about" className = "button1">Learn More</a>
        </center>
        </div>
        
         <div className="site-footer">
         <label>- © 2016. -</label>
         <br/>
         <label><i>providing low-interest microloans for local, small businesses</i></label>
         <br/>
         <label><a href="./">Project L</a></label>
        </div>
       
      </div>
    )
  }
})

