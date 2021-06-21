// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Finnote from './containers/Finnote';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Header />
    <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/finnote/:id" component={Finnote}></Route>
    </BrowserRouter>
      {/* <Finnote /> */}
      <Footer />
    </div>
    
  );
}

export default App;
