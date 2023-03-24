import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Attribution from './pages/components/Attribution';

function App() {
  return (
    	<Router>
    	<Routes>
    		<Route exact path='/' extact element={<Home/>} />
    		<Route path='/destination' element={<Destination/>} />
    		<Route path='/crew' element={<Crew/>} />
    		<Route path='/technology' element={<Technology/>} />
    	</Routes>
		<Attribution/>
    	</Router>
    );
}

export default App;
