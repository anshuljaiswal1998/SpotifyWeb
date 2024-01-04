import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<div>Hello</div>} ></Route>
          <Route exact path='/hi' element={<div className="text-3xl font-bold underline">Hi</div>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
