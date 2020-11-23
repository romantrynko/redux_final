import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { incCounter } from './actions';

function App() {

  const products = useSelector(({ products }) => products);
  const cart = useSelector(({ cart }) => cart);
  const count = useSelector(({ count }) => count);

  const dispatch = useDispatch()

  console.log(products);
  console.log(cart);

  return (
    <div className="App" onClick={() => dispatch(incCounter())}>
      Count: {count}
    </div>
  );
}

export default App;
