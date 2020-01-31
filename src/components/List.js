import React, {Component} from 'react';
import DataSubcribers from '../data/subscribers.json'
import './styles/List.css'

class List extends Component {

  state = {
    Data : DataSubcribers
  }

   order = function (type) {
     
    DataSubcribers.sort(function (a, b) {
        return a[type].localeCompare(b[type]);
    });

      this.setState({Data: DataSubcribers})
    }


    render() {
      
        return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Sport</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Data.map(element => {
              return (
                <tr>
                  <td>{element.name}</td>
                  <td>{element.lastName}</td>
                  <td>{element.age}</td>
                  <td>{element.sport}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button onClick={() => this.order("name")}>Sort by name</button>
        <button onClick={() => this.order("age")}>Sort by age</button>
        <button onClick={() => this.order("sport")}>Sort by sport</button>
       
           
         
      </div>
    
        );
    }
}


export default List;