import Home from "./pages/home.jsx";
import BookNow from "./pages/booknow.jsx"
import Confirmationpage from "./pages/confirm.jsx";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
      <Routes>
        <Route index element={<Home />} />        
        <Route path="/book" element={<BookNow />} />  
        <Route path="/confirmation" element={<Confirmationpage/>} />
      </Routes>
  );
}