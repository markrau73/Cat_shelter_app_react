import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  render(){
    return <form className='blue'>
              <input value={this.props.filterText} onChange={this.props.onChange} type="text" placeholder="Search..."/>
              <p>
                <input defaultChecked={this.props.likesKids} onClick={this.props.onClick} type="checkbox" />
                Only show kitties that like kids.
              </p>
          </form>
  }
}

export default SearchBar
