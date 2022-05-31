import React, {Component} from 'react';
import Header from './Header/Header';
import ItemList from './ItemList';

class MixedChannel extends Component {
    state = {  } 
    render() {
        const { channelList } = this.props;
        return (
            <main className="App">
                <Header />
                <ItemList channels={channelList} filterBy="mixto"/>
            </main>
        );
    }
}
 
export default MixedChannel;