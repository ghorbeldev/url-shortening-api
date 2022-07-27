import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Statistics from './components/statistics/Statistics';
function App() {
	const [shortenedLinks, setShortenedLinks] = useState([]);
	return (
		<div className='App'>
			<Header />
			<Hero setShortenedLinks={setShortenedLinks} />
			<Statistics shortenedLinks={shortenedLinks} />
			<Footer />
		</div>
	);
}

export default App;
