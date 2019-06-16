import React from 'react';
import Header from './Header';
import Order from './Order';
import Iventory from './Iventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {
    
    state = { 
        fishes:{},
        order:{},
    }

    componentWillMount() {
        
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,
        {
            context: this,
            state: 'fishes'
        });

        const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);

        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            });
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log({nextProps, nextState})
        localStorage.setItem(`order-${this.props.match.params.storeId}`,
        JSON.stringify(nextState.order));
    }

    addFishes = (fish) => {
        const fishes = {...this.state.fishes};
        const timeStamp = Date.now();
        fishes[`fish-${timeStamp}`] = fish;
        this.setState({fishes})
    }

    loadSamples = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }


    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Seafood market"/>
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map( key => 
                                    <Fish 
                                    key={key} 
                                    details={this.state.fishes[key]}
                                    addToOrder={this.addToOrder}
                                    index={key}
                                    />)
                        }
                    </ul>
                </div>
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order} 
                    params={this.props.match.params.storeId}
                    />
                <Iventory addFishes={this.addFishes} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;