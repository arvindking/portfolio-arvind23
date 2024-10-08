import './App.css';
import About from './components/About';
import Header from './components/header';
import Hero from './components/Hero';
import Projects from './components/projects';
function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
    </div>
  );
}
export default App;