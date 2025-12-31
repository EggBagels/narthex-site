import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Support } from './pages/Support';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;