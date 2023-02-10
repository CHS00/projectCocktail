import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Frame/Header';
import Footer from './components/Frame/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
