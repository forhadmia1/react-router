import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Cointact/Contact';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/countries' element={<Countries/>}>
          <Route path=':name' element={<CountryDetails></CountryDetails>}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/posts/:id' element={<PostDetails></PostDetails>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
