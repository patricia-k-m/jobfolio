import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="job/:id" element={<JobDetails />} />
          <Route path="saved" element={<Saved />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
