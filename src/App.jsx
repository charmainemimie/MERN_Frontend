import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/' element={<MainLayout/>}>
        <Route path="home" element={<Home/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
