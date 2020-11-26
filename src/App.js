import './App.css';
import Header from './Header';
import Counter from './Counter';
import Phrase from './Phrase';
import AlphabetSelector from './AlphabetSelector';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Phrase />
      <AlphabetSelector />
    </div>
  );
};

export default App;
