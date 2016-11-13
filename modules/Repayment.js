import React from 'react'

export default React.createClass({
     getInitialState(){
          return {name:"", objective:"", goal:"", isPaybackTime:"", interestDate:"", current:""}
     },
     
  componentDidMount() {
    console.log("getdata run");
    getData();
    globalCB = this.feedIndieProject;
    setTimeout(function() {
      getDataP(globalUser.ownProject);
    }, 1000)
  },
  feedIndieProject(addThis) {
    console.log("feedIndieProject run");
    console.log(addThis);
    var newA = this.state;
    for (var i in newA){
         newA[i] = addThis[i]
    }
    this.setState(newA);
  },

  render() {
    return( 
    <div>
     <div className = "container right">
        <a href="./home" className = "button1">Home</a>
     </div>
     <label><br/></label>

     <h1>Repayment</h1>
     
      <div id="fade-box" className = "container">
          <h2>{this.state.name}</h2>
          <p>{this.state.objective}</p>
          
          <h3>Total Loan Amount</h3>
          {this.state.goal}
          <h3>Cash in Pile</h3>
          {this.state.current}
          <label><br/></label> 
          
          <button className="button3">Your Plan</button>
          <button className="button3">Your Borrowers</button>
          <button className="button3">Completed Projects</button>

      </div>
      
      <br/>
      
      <div id="fade-box" className="container">
      <br/>
      {this.state.isPaybackTime ? "Repaying loans":"Gaining support"}
      
      <div id="progress-cont" className="container">
        <div id="progress" style = {{width:(parseInt(this.state.current) * 100 / parseInt(this.state.goal)) + "%"}} className="progress-bar">
        </div>
      </div>
      
      <button type="button1">Update</button>
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