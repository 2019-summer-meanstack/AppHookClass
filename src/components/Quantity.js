import React from 'react';

class Quantity extends React.Component {

    state = {
        quantity: 0
    };
    incrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });
    }
    decrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        });
    }
    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={this.decrementQuantity}>-</button>
                <span className='counter-score'>{this.state.quantity}</span>
                <button className='counter-action increment' onClick={this.incrementQuantity}>+</button>
            </div>
        )
    }
}

export default Quantity;