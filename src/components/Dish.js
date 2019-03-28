import React, {Component} from 'react';
import './Dish.css';

class Dish extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            cost: props.cost,
            type: props.type,
            id: props.id
        }
    }

    render() {
        let {name, cost, type,id} = this.state;
        return (
            <tr>
                <td className='sno'>{id+1}</td>
                <td className='name'>{name}</td>
                <td className='cost'>{cost}</td>
                <td className='type'>{type}</td>
            </tr>
        )
    }

}
export default Dish;