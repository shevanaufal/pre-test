import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import './App.css';
import DataWisudawan from "./pages/DataWisudawan";

import EditData from "./pages/EditData";
import DetilData from "./pages/DetilData";
import TambahkanData from "./pages/TambahkanData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data-wisudawan" element={<DataWisudawan />} />
        <Route path="/data-wisudawan/detil-data" element={<DetilData/>} />
        <Route path="/data-wisudawan/edit-data/" element={<EditData />} />
        <Route path="/tambahkan-data" element={<TambahkanData/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
