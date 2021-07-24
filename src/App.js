
import './App.css';
import {Component} from 'react';
import Monster from './Components/monster_template';


class App extends Component{
  constructor(){

    super();
    this.state={
        monster:[],
        search:''
    };
}

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(fact => {
          this.setState(
          {
          monster:fact
        }
        )
    })
  }

  updatesearch = (e)=>{
    this.setState({search:e.target.value})
  }

  render(){
    return(
      <div class="align">
      <h1>Monter Hunter</h1>
      <input type='search' placeholder='Search' onChange={this.updatesearch}/>
          <div className='grid'>
        {this.state.monster.filter((data)=>{
          return data.name.toLowerCase().includes(this.state.search.toLowerCase())
        }).map( data2 => {
          return <Monster data={data2}/>
        })}
          </div>
      </div>
    )
  }
}

export default App;
