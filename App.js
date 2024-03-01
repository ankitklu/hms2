// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CoverPage from './components/CoverPage';
import ViewHotel from './components/ViewHotel';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import About from './components/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
		<>
		<NavBar/>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<><CoverPage/><ViewHotel/><Footer/></>}></Route>
				<Route path="/about" element={<About/>}></Route>
				<Route path="/signup" element={<SignUp/>}></Route>
				<Route path='/view' element={<ViewHotel/>}></Route>
			</Routes>
		</BrowserRouter>
	  </>
  );
}

export default App;