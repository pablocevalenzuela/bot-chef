//import logo from './logo.svg';
import '../src/css/App.css';
import Recipe from './components/Recipe';
import AllIngredients from './components/AllIngredients';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='title'>
          <h1>Recipe Book Bot 🤖</h1>
        </div>
        <div className='ingredients'>
          <AllIngredients/>
          <Recipe/>

        </div>
      </div>
    </div>
  );
}

export default App;
