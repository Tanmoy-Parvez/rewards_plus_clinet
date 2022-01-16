import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Delivery from './Components/Delivery/Delivery';
import Stores from './Components/Stores/Stores';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Delivery />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/stores" element={<Stores />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
