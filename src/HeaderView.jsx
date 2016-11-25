import React from 'react';
import SearchBar from './header/SearchBar'
import ShowActive from './header/ShowActive'

class HeaderView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-header">
                <h1 className="header-title">To-Do List</h1>
                <div className="header-controls">
                    <ShowActive/>
                    <SearchBar/>
                </div>
            </div>
        );
    }
}


export default HeaderView;