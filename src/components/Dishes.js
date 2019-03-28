import React, {Component} from 'react';
import Dish from './Dish';
import AddDish from "./AddDish";
import './Dishes.css';

class Dishes extends Component{
    state = {
        dishList: []
    };

    addDish = (dish) => {
        let {name, cost, type} = dish;
        this.setState({
            dishList: [...this.state.dishList,
                {name: name, cost: cost, type: type}
            ]
        });
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Dish Name</th>
                            <th>Cost (in INR)</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dishList.map((item, i) => {return <Dish
                                key={i}
                                id={i}
                                name={item.name}
                                cost={item.cost}
                                type={item.type}
                        />})}
                    </tbody>
                </table>
                <AddDish callback={this.addDish}/>
            </div>
        )
    }

}
export default Dishes;