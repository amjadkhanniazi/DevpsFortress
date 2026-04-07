import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import AutomationPage from './pages/AutomationPage';
import DocsPage from './pages/DocsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PlatformPage from './pages/PlatformPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  const [loading, setLoading] = useState(true);

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
        <Route />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

      <AnimatePresence>
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default App;
