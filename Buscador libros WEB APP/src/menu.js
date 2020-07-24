import React, { Component } from 'react';
import Search from './search';
import PanelAdd from './paneladd';
import './Menu.css';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {newItemPanel: false};

        // Se debe agregar esta declaracion si la funcion add no es del tipo flecha 
        // this.add = this.add.bind(this); 
    }

    add = () =>{
        this.setState({newItemPanel: true}); //Funcion tipo NO flecha = add(){ this.setState({newItemPanel: true}); }
        console.log('mensaje');     //esta herramienta sirve para ver si la accion (click boton) funciona!
    }

    onCancel = (e) => {
        // e.preventDefault();
        this.setState({newItemPanel: false});
        console.log('falso');
    }

    render() {
        return(
            <div className='container'>
                <div className='subcontainer'>
                    <div className='logo'>
                        {this.props.title}
                    </div>

                    <div className='search'>
                        <Search onSearch={this.props.onSearch}/>
                    </div>

                    <div className='actions'>
                        <button onClick={this.add} className='button btn-blue'>Añadir nuevo libro</button>
                    </div>
                </div>

                {
                    (this.state.newItemPanel)?
                    <PanelAdd onCancel={this.onCancel} onAdd={this.props.onAdd}/>
                    :
                    ''
                }
                    
                
            </div>
        );
    }
}

export default Menu;