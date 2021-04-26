import './App.css'
import "bootstrap/dist/css/bootstrap.css"

// Importation des components
import Header from './components/Header'
import NavBar from './components/NavBar'
import Formation from './components/Formation'
import ExpPro from './components/ExpPro'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main className="container">
        <Formation />
        <ExpPro />
      </main>
    </div>
  );
}

export default App;
