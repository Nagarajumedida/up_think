import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Edit from './Components/Edit';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/create" element={<Add/>}/>
       <Route path="/edit" element={<Edit/>}/>

     </Routes>
    </div>
  );
}

export default App;
