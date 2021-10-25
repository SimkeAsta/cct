import './App.css';
import RadioWidget from './components/RadioWidget';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <RadioWidget/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
