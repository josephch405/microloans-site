// Javascript File
import React from 'react'

export default React.createClass({
     getInitialState() {
          return {name:"", user:"", interestDate:"", current:0, goal:0};
     },
     componentDidMount() {
          console.log("getdata run");
          globalCB = this.eatThis;
          getDataP(window.location.search.split("=")[1]);
     },
     eatThis(obj){
          var t = this.state;
          t.name = obj.name;
          t.interestDate = obj.interestDate;
          t.objective = obj.objective;
          t.current=parseInt(obj.current);
          t.goal=parseInt(obj.goal);
          this.setState(t);
     },
     render() {
          return (
               <div>
          <div className="row">
               <div className="column center">
                    <h1> {this.state.name} </h1>
               </div>
          </div>
          
          <div className="row">
                    <img src="http://www.zacuto.com/wp-content/uploads/2013/10/stock-footage-guide1.jpg" />
          </div>
          <label><br/></label>
          <div id="fade-box" className="container">
          <input id = "qnt" type="text" placeholder = "Enter Quantity" required/>
          <button type="button" onClick ={function(){joinProject(window.location.search.split("=")[1],document.getElementById("qnt").value)}} className = "button2">Support this Project </button>
          <label>Objective: {this.state.objective}</label>
          <div className="row">
               <div className="column center">
                    <div className="textbox3">
                         <p> Progress: {this.state.current} out of {this.state.goal} ({100*this.state.current/this.state.goal}%)</p>
                         <p> Created on: {this.state.interestDate} </p>
                    </div>
               </div>
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