import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './searchBar.jsx';
import CatTable from './catTable.jsx';


document.addEventListener('DOMContentLoaded', function(){

  var kitties = [
   {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
   {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
   {category: "male", age: "2", likesKids: false, name: "Grumpy"},
   {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
   {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
   {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
  ];

    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          filterText: "",
          likesKids: false
        }
      }
      changeText = (event) => {
        this.setState ({
          filterText: event.target.value
        })
      }

      changeLikes = (event) => {
        this.setState ({
          likesKids: this.state.likesKids ? false : true
        })
      }

      render(){
        return <div className= 'yellow'>
                <p> Cats names: Fidel Castro, Hairy Potter, Grumpy, Jude Paw, Lucifurr, Meowly Cyrus.</p>
                <SearchBar filterText={this.state.filterText} likesKids={this.state.likesKids} onChange={this.changeText} onClick={this.changeLikes}/>
                <CatTable kitties={this.props.kitties} filterText={this.state.filterText} likesKids={this.state.likesKids}/>
              </div>
      }
    }


    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('container')
    );
});
