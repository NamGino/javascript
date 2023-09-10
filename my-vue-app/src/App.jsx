import { Routes, Route } from 'react-router-dom'  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import { Login } from '../component/login'
import User from '../component/user'
import MainUser from '../component/user/MainUser';
import TableUser from '../component/user/TableUser';
import Add from '../component/user/Add';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/User" element={<User/>}></Route>
          <Route path='/TableUser' element={<TableUser/>}></Route>
          <Route path='/Add' element={<Add/>}></Route>

    </Routes>
    </>
  );
}

export default App
