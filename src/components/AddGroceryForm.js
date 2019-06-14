import React, {Component} from 'react'

class AddGroceryForm extends Component {

    state={
        value:''
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.props.addGrocery(this.state.value)
    };
    handleValueChange = e =>{
        this.setState({value: e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='enter grocery' 
                value={this.state.value} onChange={this.handleValueChange}/>
                <input type='submit' value='Add Grocery'/>
            </form>
        )
    }
}

export default AddGroceryForm