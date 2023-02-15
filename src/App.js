import logo from './logo.svg';
import './App.css';
import AddEvent from './Admin/AddEvent/AddEvent';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <AddEvent/>
     <Navbar/>
    </div>
  );
}

export default App;