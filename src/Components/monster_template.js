import React,{Component} from 'react';
import "../Styles/monster_template.css"


class monster extends Component{
    render(){
        return (
            <div className="card" >
                <img src={`https://robohash.org/${this.props.data.id}`} />
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.email}</p>
            </div>
            )
    }
}

export default monster;