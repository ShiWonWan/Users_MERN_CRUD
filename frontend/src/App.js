import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import { Crud } from "./components/Crud"
import { EditUser } from "./components/EditUser"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/update/:id" element={<EditUser />} />
          <Route path="/" element={<Crud />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
