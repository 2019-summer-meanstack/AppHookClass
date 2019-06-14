import React from 'react';
import Header from './Header';
import Grocery from './Grocery';
import AddGroceryForm from './AddGroceryForm';

class App extends React.Component {
  state = {
      grocery:
          [{
              name: "Apple",
              quantity: 2,
              id: 1
          },
          {
              name: "Dragon Fruit",
              quantity: 5,
              id: 2
          },
          {
              name: "Orange",
              quantity: 9,
              id: 3
          },
          {
              name: "Peach",
              quantity: 13,
              id: 4
          }]
  };

  previd=4;
  handleAddGrocery = name =>{
      this.setState(prevState=>{
          return{
              grocery: [
                  ...prevState.grocery, 

                {
                    name,
                    quantity: 0,
                    id: (this.previd +=1)
                }]
          };
      });
  }
  handleRemoveGrocery = id => {
      //console.log('remove item ' + id)
      this.setState(prevState => ({
          grocery: prevState.grocery.filter((g) => g.id != id)
      }));
  };

  render() {
      return (<div>
          <Header />
          {
              this.state.grocery.map(g => (
                  <Grocery name={g.name}
                      quantity={g.quantity}
                      key={g.id.toString()}
                      id={g.id}
                      removeGrocery={this.handleRemoveGrocery} />
              ))
          }
          <AddGroceryForm addGrocery={this.handleAddGrocery}/>
      </div>
      );
  }
}


export default App;
