import React, { Component } from 'react';

class FamousPeople extends Component {

  constructor(props) {
    // React Componets have props, pass them to the 
    // parent (Component) class - if you don't,
    // things won't work right!
    super(props);

    // Setting state with an = is something you only 
    // want to do in the constructor. Outside of the
    // constructor always use the setState method
    this.state = { famousPerson: 
      { name:'',
        role: '', 
      } 
    };

  }


handleChangeFor =(property) => (event) => {
  this.setState( {famousPerson: {
  ...this.state.famousPerson,
  [property]: event.target.value
}
});
}
handleSubmit =(property) => (event) => {
    event.preventDefault();
    console.log(this.state.famousPerson)
let newFamousPerson = new FamousPeople(this.state.famousPerson.name, this.state.famousPerson.role);
return newFamousPerson;
    
}
  render() {
    return (
      <div>
        <h2>This Celebrity</h2>
        <p>Stars Name</p>
        <input onChange={this.handleChangeFor('name')} />
        <p>Famous Role</p>
        <input onChange={this.handleChangeFor('role')}  />
        
        <p>{this.state.famousPerson.name} is famous for -</p>

        <p>{this.state.famousPerson.role}</p>

        <form ref="form" onSubmit={this.handleSubmit}>
    <button type="submit">Submit to Form</button>
</form>
<ul>    
    <li>{ this.state.famousPerson.name } is famous for { this.state.famousPerson.role }</li>
    </ul>
        
    
      </div>
      
    );
  }
}

export default FamousPeople;