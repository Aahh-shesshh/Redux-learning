import React from "react";
import { useDispatch} from "react-redux";
import { incrementByAmount } from "../store/slices/counterSlice";

const Bottom = () => {
    const [increasedAmount, setIncreasedAmount] = React.useState('2')
    const dispatch = useDispatch();
    // const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div>Bottom button</div>
        <input value={increasedAmount} onChange={e => setIncreasedAmount(e.target.value) } ></input>
      <button onClick={ () => dispatch(incrementByAmount(Number(increasedAmount)))}> Add Amount</button>
    </>
  );
};

export default Bottom;
