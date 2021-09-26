import './App.css';

import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter start="22"/>
      <Counter />
    </div>
  );
}

export default App;
