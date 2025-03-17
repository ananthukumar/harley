
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
import PrivacyPolicy from './pages/privacy-policy';
import TermsAndCondition from './pages/terms-and-condition';
import ReturnPolicy from './pages/return-policy';
import CookiesPolicy from './pages/cookies-policy';
import ShippingPolicy from './pages/shipping-policy';

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
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      <Route path="/retun-policy" element={<ReturnPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
    </Routes>
    <Footer />
  </Router>
);
export default App;
