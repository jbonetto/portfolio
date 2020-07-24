import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image:'',
            rating: this.props.rating,
            stars: Array(parseInt(this.props.rating)).fill(0)
        }
    }

    componentDidMount() {
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        }); 
    }

    onChangeRating = e => {
        const rating = parseInt(e.target.value)
        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(0),
        })
    } 

    render(){
        return(
            <div className="item">
                <div className="image"><img src={'img/' + this.props.image} width="100%" /></div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                    <p>
                    {this.state.stars.map(x =>
                        <img src='img/star.png' width='32' />
                    )}
                    </p> 
                    Calificación: 
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button>Eliminar</button>
                </div>
            </div>
        );
    }
}

export default Item;