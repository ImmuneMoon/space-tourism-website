import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
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
    		<Route exact path='/' extact element={<Home/>} />
    		<Route path='/destination' element={<Destination/>} />
    		<Route path='/crew' element={<Crew/>} />
    		<Route path='/technology' element={<Technology/>} />
    	</Routes>
		<Attribution style="position: sticky; bottom: 0;"/>
    	</Router>
    );
}

export default App;
