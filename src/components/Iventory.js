import React from 'react';
import AddfishForm from './AddfishForm';

class Iventory extends React.Component {


    render() {
        return (
            <div>
                <h2>Iventory</h2>
                <AddfishForm addFishes={this.props.addFishes}/>    
                <button onClick={this.props.loadSamples}>Load Samples</button>

            </div>
        )
    }
}

export default Iventory;