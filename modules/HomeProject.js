import React from 'react'

export default React.createClass({
     
     render(){
          console.log(this.props)
     return(
     <div className = "homeProject">
          {this.props.obj.name}<br/>
          ${this.props.obj.current}
     </div>
     )}
})