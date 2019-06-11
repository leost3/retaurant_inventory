import React from 'react';
import {getFunName} from '../helpers';
import PropTypes from 'prop-types';
class StorePicker extends React.Component {

    submitForm = (e) => {
        e.preventDefault();
        const storeiD = this.storeInput.value;
        this.context.router.history.push("/store/asdasd");
    }

    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.submitForm}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={ (input) => { this.storeInput = input}}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}


StorePicker.contextTypes = {
    router: PropTypes.object
}

export default StorePicker;