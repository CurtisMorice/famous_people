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
      } ,
      famousPeopleArray: [],
    };

  }


handleChangeFor =(property) => (event) => {
  this.setState( {famousPerson: {
  ...this.state.famousPerson,
  [property]: event.target.value
}
});
}
handleSubmit = (event)=> {
    event.preventDefault();
    this.setState({famousPeopleArray: [
        ...this.state.famousPeopleArray, this.state.famousPerson
    ]});
    this.setState({famousPerson: {
        name: '',
        role:'',
    }}); 
}
  render() {
    return (
        <div>
            <h2>This Celebrity</h2>
            <form onSubmit={this.handleSubmit}>
                <p>Stars Name</p>
                    <input onChange={this.handleChangeFor('name')} value={this.state.famousPerson.name} />
                <p>Famous Role</p>
                    <input onChange={this.handleChangeFor('role')} value={this.state.famousPerson.role} />
                
                <p>{this.state.famousPerson.name} is famous for -</p>

                <p>{this.state.famousPerson.role}</p>
            
                    <input type="submit" value="Submit" />
            </form>
            <ul>    
                {this.state.famousPeopleArray.map(person =>
                <li>{ person.name } is famous for { person.role} </li>
                
                )}
            </ul>
            
        
        </div>
      
    );
  }
}

export default FamousPeople;