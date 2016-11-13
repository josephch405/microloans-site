import React from 'react'

export default React.createClass({
  render() {
    return( 
      <div>
        <div className="row">
          <div className="column center">
            
            <h1>About</h1>
            
          </div>
        </div>
        <div>
          <div className="textbox">
            <p><i>Project L aims to provide low-interest microloans to encourage local small business development.</i></p>
            <hr/>
            <p>Project L is a platform to crowdfund local small businesses. We connect borrowers seeking to expand their 
            small business with investors who want to give back to their community. Community building is an important value 
            of Project L and borrowers and investors are geo-fenced to their city, to facilitate neighborhood development. </p>
            <p>Borrowers are first screened for qualification. Requirements include being over the age of 18, living and operating 
            their business in the continental U.S., and being in operation for over one fiscal year. Borrowers then qualify to 
            create a profile and start their first microloan campaign! Microloan campaigns are for quantities of $100 to up to 
            $50,000 for anything from equipment to expansion. </p>
            <p>Investors create profiles and deposit funds into their accounts with either credit, debit and or wire transfer 
            from an existing bank account. They then browse local projects from within their city and choose campaigns to fund. 
            Contributions can be made in any amount, with some businesses offering rewards for passing a certain threshold. 
            Investors and borrowers are kept in close contact; investors receive any notifications of project updates, including 
            extension of repayment dates or completion of goals.</p>
            <p>With no middlemen, low-interest rates, and an emphasis on giving back to your local neighborhood businesses, 
            Project L hopes to encourage the growth of communities by providing loans to those who would otherwise not 
            receive them.</p>
          </div>
        </div>
        
        <div className = "center">
          <h1>Our Values</h1>
          <div className="textbox4">Transparency</div>
          <div className="textbox4">Opportunity</div>
          <div className="textbox4">Community</div>
        </div>
        <br/>  
        <div className="row">
            <a href=".\" className = "button1"> Return Home</a>
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