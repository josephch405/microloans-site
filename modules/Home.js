import React from 'react'
import HomeProject from './HomeProject'

export default React.createClass({
  getInitialState() {
    return {
      projs: []
    }
  },
   componentDidMount() {
    console.log("getdata run");
    getData();
    globalCB = this.feedHomeProjects;
    setTimeout(function() {
      for (var i = 0; i < globalUser.projectIDs.length; i ++) {
        getDataP(globalUser.projectIDs[i][0]);
      }
      checkHasProject();
    }, 1000)
  },
  feedHomeProjects(addThis) {
    console.log("feedHomeProjects run");
    console.log(addThis);
    var newA = this.state.projs;
    newA.push(addThis);
    this.setState({projs:newA});
  },
  render() {
    var tempDemo = [{
      name: "NAME1",
      money: 20
    }, {
      name: "NAME2",
      money: 34
    }];
    return (
      <div>
          <label><br/></label>

        <div className="row">
          <h1 id = "name">Home</h1>
        </div>

      <div className="row">
          <a href="./profile" className="button1">Profile</a>
          <a href className="button1" id = "MyProject">My Project</a>
      
      </div>
      
      <br/>
      
      <div id="fade-box" className="container">
       <label id="label1">Current Funds</label>
        <p id = "money"></p>
  
        <br/>

        <label id="label1">Currently Invested In</label>
        <label><br/></label>
        <div className="scrollbox">
          {this.state.projs.map(function(obj, index){
          return <HomeProject obj={obj} key = {index} />
        })}
        </div>
        
        <br/>
      </div>

      
      <br/>
      <hr/>
      <br/>
      
      <div id="narrow" className="container2 center">
      <div className="column">
        <label>Other Projects</label>
      </div>
      <label>
      </label>
      <div className="column">
        <input type="text" id="searchbar" placeholder="Search other projects"/>
        <button>Go</button>
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
