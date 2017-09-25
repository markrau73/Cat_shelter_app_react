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
          return <tr> <td className='red'>{name}</td> <td className='red'>{this.props.kitty.age}</td></tr>;
      }
    }

    class CatCategoryRow extends React.Component {
      render(){
          return <tr> <th className='turquoise' colSpan="2">{this.props.category}</th></tr>;
      }
    }

    class CatTable extends React.Component {
      render(){
              let rows = [];
              let lastCategory = null;
              this.props.kitties.forEach( (kitty) => {
                if ((this.props.filterText !== '' && kitty.name.indexOf(this.props.filterText) !== -1) && (kitty.likesKids === this.props.likesKids || this.props.likesKids === false)) {
                  if(kitty.category !== lastCategory){
                    rows.push(<CatCategoryRow category={kitty.category} key={kitty.category}/>);
                  }
                  rows.push(<CatRow kitty={kitty} key={kitty.name}/>);
                  lastCategory = kitty.category;
                }
              });
              return <table className='green'>
                        <thead><tr><th>Name</th><th>Age</th></tr></thead><tbody>{rows}</tbody>
                      </table>;
      }
    }

    class SearchBar extends React.Component {
      render(){
        return (
              <form className='blue'>
                  <input value={this.props.filterText} onChange={this.props.changeText} type="text" placeholder="Search..."/>
                  <p>
                    <input defaultChecked={this.props.likesKids} onClick={this.props.changeLikes} type="checkbox"/>
                    Only show kitties that like kids.
                  </p>
              </form>
            )
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
      changeText = (event) => {
        this.setState ({
          filterText: event.target.value
        })
      }

      changeLikes = (event) => {
        this.setState ({
          likeKids: this.state.likeKids ? false : true
        })
      }

      render(){
        return <div className= 'yellow'>
                <SearchBar filterText={this.state.filterText} likesKids={this.state.likesKids} changeText={this.changeText} changeLikes={this.changeLikes}/>
                <CatTable kitties={this.props.kitties} filterText={this.state.filterText} likesKids={this.state.likesKids}/>
              </div>
      }
    }


    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('container')
    );
});
