import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Attribution from './components/Attribution';

function App() {
  return (
    	<Router>
    	<Navbar/>
    	<Routes>
    		<Route path='/' element={<Home/>} />
    		<Route path='/destination' element={<Destination/>} />
    		<Route path='/crew' element={<Crew/>} />
    		<Route path='/technology' element={<Technology/>} />
    	</Routes>
		<Attribution/>
    	</Router>
    );
}

export default App;
