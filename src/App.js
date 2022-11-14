import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Details from './components/Details';
import NewArrival from './components/NewArrival';
import Search from './components/Search';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Carousel/>}></Route>
        <Route path="/new-arrival" element={<NewArrival/>}></Route>
        <Route path="/search/:query" element={<Search/>}></Route>
        <Route path="/details/:isbn" element={<Details/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>

    
    </>
    

  );
}

export default App;
