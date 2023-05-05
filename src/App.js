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
                <b>Instrucctions:</b>
            <ul>
                <li>
                    1) Just enter six ingredients.
                </li>
                <li>
                    2) Now, you have to click in "Get my recipe" an vualá 🤯.
                </li>
            </ul>
        </div>
        <div className='ingredients'>
          <AllIngredients/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
