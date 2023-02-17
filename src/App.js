import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Frame/Header';
import Footer from './components/Frame/Footer';
import Home from './components/Home/Home';
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import { useEffect, useState } from 'react';
import Recipe from './components/Recipe/Recipe';

function App() {

  const [selected,setSelected] = useState();

  useEffect(()=>{
    console.log(selected);
  },[selected])

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search selected={selected} setSelected={setSelected}/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
