import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quest from './pages/Quest';
import Dashboard from './pages/Dashboard';
import Story from './pages/Story';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/story" element={<Story />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;