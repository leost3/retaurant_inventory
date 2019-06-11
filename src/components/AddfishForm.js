import React from 'react';

class AddfishForm extends React.Component {

    createFish = e => {
        e.preventDefault();
        console.log("Gonna make some fish")
        const fish = {
            name : this.name.value,
            price : this.price.value,
            status : this.status.value,
            desc : this.desc.value,
            image : this.image.value,
        }
        this.props.addFishes(fish);
        this.inputForm.reset();
    }

    render() {
        return (
            <form ref={(input) => this.inputForm = input} className="fish-edit" onSubmit={this.createFish}>
                <input ref={(input) => this.name = input} type="text" placeholder="Fish name"/>
                <input ref={(input) => this.price = input} type="text" placeholder="Fish price"/>
                <select ref={(input) => this.status = input}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold out</option>
                </select>
                <textarea ref={(input) => this.desc = input} placeholder="Fish desc"/>
                <input ref={(input) => this.image = input} type="text" placeholder="Fish Image"/> 
                <button type="submit">Add Items</button>
            </form>
            
        )
    }
}


export default AddfishForm;