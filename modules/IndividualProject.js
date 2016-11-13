// Javascript File
import React from 'react'

export default React.createClass({
   render() {
    return( 
    <div>
          <div className="row">
               <div className="column center">
                    <h1> Project Name </h1>
               </div>
          </div>
          
          <div className="row">
                    <img src="http://www.zacuto.com/wp-content/uploads/2013/10/stock-footage-guide1.jpg" />
          </div>
          
          <div className="row">
               <div className="column center">
                    <div className="textbox3">
                         <p> Created by: [User] </p>
                         <p> Created on: [Date] </p>
                    </div>
               </div>
          </div>
     </div>
    )
  }
})