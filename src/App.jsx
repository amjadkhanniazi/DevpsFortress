import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import AutomationPage from './pages/AutomationPage';
import DocsPage from './pages/DocsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PlatformPage from './pages/PlatformPage';
import ServiceDetail from './pages/ServiceDetail';
import ServicesPage from './pages/ServicesPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
