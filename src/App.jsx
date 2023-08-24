import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Resource from './pages/Resource';
import './pages/Resource/components/Modal/Modal.css';
import './pages/Resource/components/Table/Table.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Resource" element={<Resource />}/>
          
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
