import React from 'react';
import { formatPrice } from '../helpers';
class Order extends React.Component {

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        console.log(this.props)

        if (!fish || fish.status === 'unavailable') {
            return (
                <div>
                    <li key={key}> Sorry, {fish ? fish.name : 'fish'} is no longer available`</li>
                    <button onClick={() => this.props.removeOrder(key)}>Demove Order</button> 
                </div>
            ) 
        }            
        return (
            <li key={key}>
                <span>{count}libs {fish.name}</span>
                <span className="price">{formatPrice(count * fish.price)}</span>
                <button onClick={() => this.props.removeOrder(key)}>Demove Order</button> 

            </li>
        )
    }



    render() {
        const orderIds = Object.keys(this.props.order); //[fish1, fish2, fish3]
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price || 0)
            }
            return prevTotal;
        }, 0)
        return (
            <div className='order-wrap'>
                <h2>Your Order </h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Order;