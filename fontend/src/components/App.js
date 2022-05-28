import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
