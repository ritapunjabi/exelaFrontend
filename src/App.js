import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import AddBill from './Components/BillForm';
import BillForm from './Components/BillForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<BillForm />}></Route>
          <Route path="/edit/:id" element={<BillForm />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
