import { createStore } from 'redux';
import Counter from '../reducer/Counter';

const Store = createStore(Counter);

export default Store