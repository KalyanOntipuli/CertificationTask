import './App.css';
import Home from './components/Home/Home'
import Signup from './components/SignupAndLogin/Signup';
import Certification from './components/skillverification/Certification';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/SignupAndLogin/Login';
import Footer from './components/Footer/Footer';
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certify" element={<Certification />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App