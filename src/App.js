// import logo from './logo.svg';
import './App.css';
import AddEvent from './Admin/AddEvent/AddEvent';
import EventCatalog from './pages/EventCatalog/EventCatalog';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import EventOverview from './pages/EventOverview/EventOverview';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route  path="/addEvent" element={<AddEvent/>}></Route>
            <Route  path="/events" element={<EventCatalog/>}></Route>
            <Route  path="/event-overview/:id" element={<EventOverview/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
 
  );
}

export default App;