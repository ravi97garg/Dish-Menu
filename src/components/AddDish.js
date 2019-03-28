import React, {Component} from 'react';
import './AddDish.css';

class AddDish extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            cost: 0,
            type: 'Indian'
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(e){
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div className='AddDish'>
                <input name="name" className='dishName' type="text" placeholder="Dish Name" onChange={this.updateState}/>
                <input name="cost" className='dishCost' type="number" placeholder="Cost (in INR)" onChange={this.updateState}/>
                <select name="type" onChange={this.updateState}>
                    <option defaultValue={true}>Indian</option>
                    <option>Chinese</option>
                    <option>Thai</option>
                    <option>Continental</option>
                </select>
                <button className='addBtn' onClick={() => this.props.callback(this.state)}>Add Dish</button>
            </div>
        )
    }
}
export default AddDish;