import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  return (
    	<Router>
    	<Navbar />
    	<Routes>
    		<Route exact path='/' extact element={<Home />} />
    		<Route path='/destination' element={<Destination/>} />
    		<Route path='/crew' element={<Crew/>} />
    		<Route path='/technology' element={<Technology/>} />
    	</Routes>
    	</Router>
    );
}

export default App;
