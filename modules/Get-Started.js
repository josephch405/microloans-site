// JavaScript File
import React from 'react'

export default React.createClass({
  render() {
    return( 
    <div>
    <label><br/></label>
    <h2>Register</h2>
    <div className="row">
     <label><i>Sign up and support what you love.</i></label>
    </div>
     <label><br/></label>

    
    <form action="action_page.php">
    <div className="container2">

    <label>Basic Information</label>
    <input type="text2" id="name" placeholder="Full name" required/>
    <input type="text2" id="eml" placeholder="Email address" required/>
    
    <hr/>
    
    <label>Login Information</label>
    <input type="text2" id="usn" placeholder="Username" required/>
    <input type="password" id="pass" placeholder="Password" required/>
    
    <hr/>
    
    <label>Credit Card Information</label>
    
    <input type="password" id="crdt" placeholder="Credit Card Number" required/>
    
    <hr/>

    <div className="row">
    <button type="button" onClick={function(){tryRegister(document.getElementById("name").value,
      document.getElementById("usn").value,document.getElementById("pass").value,
      document.getElementById("eml").value,document.getElementById("crdt").value)}}>Submit</button>
    
    <a href="./" className = "button4">Cancel</a>
    </div>
   
    </div>
    </form>
    
    </div>
    )
  }
})
