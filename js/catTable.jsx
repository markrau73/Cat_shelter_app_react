import React from 'react';
import ReactDOM from 'react-dom';

import CatCategoryRow from './catCategoryRow.jsx';
import CatRow from './catRow.jsx';

class CatTable extends React.Component {
  render(){
          var rows = [];
          var lastCategory = null;

          this.props.kitties.forEach( (kitty) => {

            if ((this.props.filterText !== '' && kitty.name.indexOf(this.props.filterText) === 0) && (kitty.likesKids === this.props.likesKids || this.props.likesKids === false)) {
              if(kitty.category !== lastCategory){
                rows.push(<CatCategoryRow category={kitty.category} key={kitty.category}/>);
              }
              rows.push(<CatRow kitty={kitty} key={kitty.name}/>);
              lastCategory = kitty.category;
            }
          });
          return <table className='green'>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </table>;
  }
}

export default CatTable
