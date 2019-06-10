import React from 'react';
import Header from './Header';
import Order from './Order';
import Iventory from './Iventory';

class App extends React.Component {
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                <Order />
                <Iventory />
            </div>
        )
    }
}

export default App;