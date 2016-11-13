// Javascript File
import React from 'react'

export default React.createClass({
   render() {
    return( 
    <div>
          <div className="row">
               <div className="column center">
                    <h1>Projects Near You</h1>
                    <a href="/profile" className = "button1">Profile</a>
               </div>
          </div>
      
      
      <div className="row">
        <div className="column center">
          Search: <input type="text" id="searchbar" placeholder="by location"/>
          <button>Go</button>
        </div>
      </div>
      
      <div className="row">
       <div className="textbox3">
       <p> Project Data Here </p>
       </div>
       <div className="textbox3">
       <p> Project Data Here </p>
       </div>
       <div className="textbox3">
       <p> Project Data Here </p>
       </div>
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