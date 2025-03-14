
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgot-password';
import Gift from './pages/gift';
import Catogories from './pages/catogories';
import Catogorylist from './pages/catogories-list';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/gift" element={<Gift />} />
      <Route path="/catogories" element={<Catogories />} />
      <Route path="/catogories-list" element={<Catogorylist />} />
    </Routes>
    <Footer />
  </Router>
);
export default App;
