import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

  let kitties = [
   {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
   {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
   {category: "male", age: "2", likesKids: false, name: "Grumpy"},
   {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
   {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
   {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
  ];

    class CatRow extends React.Component {
      render(){
          let name = this.props.kitty.likesKids?
          this.props.kitty.name : <span style={{color: 'red'}}> {this.props.kitty.name}</span>;
          return <tr> <td>{name}</td> <td>{this.props.kitty.cena}</td></tr>;
      }
    }

    class CatCategoryRow extends React.Component {
      render(){
          return <tr> <th colSpan="2">{this.props.category}</th></tr>;
      }
    }

    class CatTable extends React.Component {
      render(){
              let rows = [];
              let lastCategory = null;
              this.props.kitties.forEach( (kitty) => {
                  if(kitty.category !== lastCategory){
                    rows.push(<CatCategoryRow category={kitty.category} key={kitty.category}/>);
                  }
                  rows.push(<CatRow kitty={kitty} key={kitty.name}/>);
                  lastCategory = kitty.category;
              });
              return <table>
                        <thead><tr><th>Name</th><th>Age</th></tr></thead><tbody>{rows}</tbody>
                      </table>;
      }
    }

    class SearchBar extends React.Component {
      render(){
        return <form>
                  <input type="text" placeholder="Search..."/>
                  <p>
                    <input type="checkbox"/>
                    Only show kitties that likes kids.
                  </p>
              </form>
      }
    }

    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          filterText: "",
          likesKids: false
        }
      }
      render(){
        return <div>
                <CatTable kitties={this.props.kitties} filterText={this.state.filterText} likesKids={this.state.likesKids}/>
                <SearchBar filterText={this.state.filterText} likesKids={this.state.likesKids}/>
              </div>
      }
    }


    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('container')
    );
});
