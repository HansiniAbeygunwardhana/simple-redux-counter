import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './state/store';
import { decrement, increment, incrementAsync, incrementByAmount } from './state/counter/counterSlice';

function App() {

  const count = useSelector((state : RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment Async</button>
      </div>
    </>
  )
}

export default App
