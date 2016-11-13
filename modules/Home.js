import React from 'react'

export default React.createClass({
  componentDidMount(){
    getData();
  },
  render() {
    return( 
    <div>
        <div className="row">
          <div className="column right">
            <h2 id = "name">Home</h2>
          </div>
        </div>
      
      <div className="row">
        <div className="column center">
          <a href="./profile" className="button1">Profile</a>
          <a href="./new-project" className="button1">My Project</a>
        </div>
      </div>
      
      <div className="row">
        <div className="column center">
          <label> Current Funds </label>
            <div className="textbox2">
            <p id = "money"></p>
            </div>
        </div>
      </div>
      
      <div className="row">
        <div className="column center">
          <label><br/>Currently Invested In</label>
            <div className="textbox2">
            <p> Project Data Here </p>
            </div>
        </div>
      </div>
      
      
      <div className="row">
        <div className="column center">
          <label>Other Projects</label>
        </div>
        <div className="column center">
          <input type="text" id="searchbar" placeholder="Search other projects"/>
          <button>Go</button>
        </div>
      </div>
    
    </div>
    )
  }
})
