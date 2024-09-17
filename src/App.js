import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Offers from './components/offer';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Menu/>
      <Offers/>
      <About/>
      <Contact/>
      
    </div>
  );
}

export default App;
