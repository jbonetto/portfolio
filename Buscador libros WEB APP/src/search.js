import React, { Component } from 'react';


class Search extends Component {
    
    constructor(props){
        super(props);

    }

    onChangeEvent = e => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onSearch(query);
    }

    render() {

        return(
            <input type='text' onChange={this.onChangeEvent}/>
        );

    }
}

export default Search;