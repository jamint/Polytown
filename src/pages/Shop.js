import { connect } from 'react-redux';
import {
    incrementAction,
    decreaseAction,
} from '../store/actions';

function Shop(props) {
    console.log("AAAA")
    console.log(props)
    console.log("BBBB")
    return (
        <div>Shop</div>
    );
}

export default Shop;