import './App.css';
import './Reset.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header id='mainNav' className='App-header'>
      <Header/>
      </header>
      <main className='App-main'>
      <Main/>
      </main>
      <footer className='App-footer'>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
