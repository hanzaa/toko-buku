import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useState} from'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Details from './components/Details';
import NewArrival from './components/NewArrival';
import Search from './components/Search';
import Login from './components/Login';


function App() {
  const [username,setUsername]=useState('guest')
  console.log(username)

  return (
    <>
    <BrowserRouter>
    <Header username={username}/>
      <Routes>
        <Route path="/" element={<Carousel/>}></Route>
        <Route path="/login" element={<Login setUsername={setUsername}/>}></Route>
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
