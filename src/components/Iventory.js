import React from 'react';
import AddfishForm from './AddfishForm';

class Iventory extends React.Component {

    handleChange = (e, key) => {
        const fish = this.props.fishes[key];
        const updatedFish = 
        {...fish,
            [e.target.name]:e.target.value
        }
        this.props.updateFish(key, updatedFish);
    }


    renderIventory = key => {
        const fish = this.props.fishes[key];
        return (
            <div key={key} className="fish-edit">
                <input type="text" name="name" placeholder="Fish Name" value={fish.name} onChange = { e => this.handleChange(e, key)} />
                <input type="text" name="price" placeholder="Fish price" value={fish.price} onChange = { e => this.handleChange(e, key)} />
                <select type="text" name="status" placeholder="Fish status" value={fish.status} onChange = { e => this.handleChange(e, key)} >
                    <option value="availabole">Fresh</option>
                    <option value="unavailabole">Sold Out</option>
                </select>
                <textarea type='text' name="desc" placeholder="Fish Desc" value={fish.desc} onChange = { e => this.handleChange(e, key)} ></textarea>
                <input type="text" name="image" placeholder="Fish image" value={fish.image} onChange = { e => this.handleChange(e, key)} />
                <button onClick={() => this.props.deleteFish(key)}> Remove Fish </button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Iventory</h2>
                {Object.keys(this.props.fishes).map(this.renderIventory)}
                <AddfishForm addFishes={this.props.addFishes}/>    
                <button onClick={this.props.loadSamples}>Load Samples</button>

            </div>
        )
    }
}

export default Iventory;