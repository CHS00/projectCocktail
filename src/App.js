import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Frame/Header';
import Footer from './components/Frame/Footer';
import Home from './components/Home/Home';
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Recipe from './components/Recipe/Recipe';
import Custom from './components/Custom/Custom';

function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/custom" element={<Custom/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
