import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Secend from './components/Secend';

function App() {
  return (
    <div className="App">
    {/* <HomePage/> */}
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/secendPage' element={<Secend/>}></Route>
        {/* <Route exact path='/info' element={<FirstPage/>}></Route> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
