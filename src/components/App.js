import React from 'react';
import Header from './Header';
import Order from './Order';
import Iventory from './Iventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';


class App extends React.Component {
    
    state = {
        fishes:{},
        order:{},
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
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Iventory addFishes={this.addFishes} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;