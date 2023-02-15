// import logo from './logo.svg';
import './App.css';
import AddEvent from './Admin/AddEvent/AddEvent';
import EventCatalog from './pages/EventCatalog/EventCatalog';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import EventOverview from './pages/EventOverview/EventOverview';
import Success from './pages/Succes';
import Cancel from './pages/Cancel';
import BookTicket from './pages/BookTicket/BookTicket';
import Register from './pages/Register/Register';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route  path="/addEvent" element={<AddEvent/>}></Route>
            <Route  path="/events" element={<EventCatalog/>}></Route>
            <Route  path="/success" element={<Success/>}></Route>
            <Route  path="/cancel" element={<Cancel/>}></Route>
            <Route  path="/book" element={<BookTicket/>}></Route>
            <Route  path="/register" element={<Register/>}></Route>
            <Route  path="/login" element={<LoginPage/>}></Route>
            <Route  path="/event-overview/:id" element={<EventOverview/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
 
  );
}

export default App;