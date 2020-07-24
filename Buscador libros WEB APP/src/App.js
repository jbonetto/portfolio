import React, { Component } from 'react';
import './App.css';
import Menu from './menu';
import List from './list';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books:[
        {id:0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg'},
        {id:1, rating: 3, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating: 5, title: 'Código Da Vinci', image: 'libro03.jpg'},
        {id:3, rating: 5, title: 'El principito', image: 'libro04.jpg'},
        {id:4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'}
      ],
      copyBooks: [],
    };
  }

  onAdd = (item) => {
    // console.log (item);
    let temp = [...this.state.books];
    const id = temp[temp.length - 1].id ++;
    item[id] = id;
    temp.push(item);

    this.setState({books: [...temp]});
    // console.log(this.setState);
    this.initBooks();
  }

  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));

    
  }

  onSearch = (query) => {
    if(query === '') {
      this.initBooks();
    }else{
      const temp = [...this.state.books];
      let res = [];

      temp.forEach(item =>{
        if(item.title.toLocaleLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });

      this.setState({copyBooks: [...res]});
    }
  }

  render(){  
    return (
      <div className='app'>
        <Menu title='Amozon' onAdd={this.onAdd} onSearch={this.onSearch}/>
        <List item={this.state.copyBooks}/>
     </div>
    );
  }


}


export default App;
