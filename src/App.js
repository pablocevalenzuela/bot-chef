//import logo from './logo.svg';
import '../src/css/App.css';
import Recipe from './components/Recipe';
import AllIngredients from './components/AllIngredients';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='title'>
          <h1>Chef Bot 🤖</h1>
          <p>
                Instrucctions:
            </p>
            <p>
            <ul>
                <li>
                    1) Just enter three ingredients.
                </li>
                <li>
                    2) Just enter three ingredients.
                </li>
            </ul>
            </p>
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
