import './App.css';
import Fruit from './Fruit'
import Car from './Car';

function App() {
	
const fruits=
	{
	name:"Mango",
	color:"Yellow"
	}

return (
	<div className="App">
	<Fruit fruits={fruits} />
	<hr></hr>
	<Car />
	</div>
);
}

export default App;
