import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './routes/Login';
import SignUpComponent from './routes/SignUp';
import Home from './routes/Home';

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/login' element={<LoginComponent />} ></Route>
          <Route exact path='/signup' element={<SignUpComponent />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
