import Header from './components/shared/header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/routes/home';
import NotFound from './components/routes/notFount';
import Footer from './components/shared/footer';
import Accordian from './projects/accordian';
import RandomColor from './projects/randomColor';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="/random-color" element={<RandomColor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;