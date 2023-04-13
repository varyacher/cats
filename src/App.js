import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Header from './components/Header'
import Facts from './components/Facts'
import Gallery from './components/Gallery'
import Feedback from './components/Feedback'

function App() {
  return (
  <>
    <div className="main">
      <Menu />
      <Header />
      <Facts />
      <Gallery />
      <Feedback />
    </div>
    
  </>
  );
}

export default App;