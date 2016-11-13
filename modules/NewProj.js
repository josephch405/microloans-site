// JavaScript File
import React from 'react'

export default React.createClass({
  render() {
    return( 
    <div>
     <div className = "container right">
        <a href="./home" className = "button1">Home</a>
    </div>
     <h2>New Project</h2>
    
    <div className="container2">
    <input type="text2" id="projname" placeholder="Project Name" required/>
    <input type="text2" id="objective" placeholder="Objective" required/>
    <input type="text2" id="goal" placeholder="Goal ($)" required/>
    </div>
    
    <div className="container3 center">
    <button type="button" onClick={function(){tryCreate(document.getElementById("projname").value, document.getElementById("objective").value,
    document.getElementById("goal").value)}}>Create Project</button>
    </div>
    
    </div>
    )
  }
})
