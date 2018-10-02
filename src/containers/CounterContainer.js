import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9'
    ];

    const random = Math.floor(Math.random() * 5);
    return colors[random];
}

//store의 state를 props로 연결
const mapStateToProps = (state) => ({
    // 하나일때,
    // color: state.color,
    // number: state.number
    color: state.colorData.color,
    number: state.numberData.number,
});

//액션함수로 액션을 생성하고 dispatch하는 함수를 만들어서 props에 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;